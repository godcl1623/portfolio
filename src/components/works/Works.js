/* eslint-disable react-hooks/exhaustive-deps */
/* ***** Dependencies ***** */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// components
import Common from '../utils/Common';
import Modal from '../modal/Modal';
import Projects from '../modal/projects/Projects';
import GenSection from '../utils/GenSection';
import PageBtn from '../modal/projects/layouts/PageBtn';
import PageIndicator from '../modal/projects/layouts/PageIndicator';
// action creator
import {
  modalHandlerCreator,
  selectedProjectCreator,
  projectsListCreator,
  selectedMenuCreator,
  changeDetectedCreator,
  isChangingProjectCreator } from '../../actions';
// custom module
import projectsData from '../../db/projectsData';
import { flex } from '../../styles/presets';

/* ***** Component Body ***** */
const Works = () => {
  // States
  const modalState = useSelector(state => state.modalState);
  const changeStatus = useSelector(state => state.isChangeDetected);
  const list = useSelector(state => state.projectsList);
  // redux - dispatch
  const dispatch = useDispatch();
  // refs
  const container = React.useRef();
  // module extracting
  const { preview: icon, headers: subject } = projectsData;

  // Component-specific Functions
  const coords = () => {
    if (container.current) {
      return container.current.childNodes[1].offsetWidth + 40;
    }
  }

  const updateStates = e => {
    dispatch(modalHandlerCreator(true));
    dispatch(selectedProjectCreator(e.target.dataset.project));
    dispatch(isChangingProjectCreator(-coords() * list.indexOf(e.target.dataset.project)));
  }

  // Update 'projectsList'
  useEffect(() => {
    dispatch(projectsListCreator(projectsData.headers));
  }, []);

  // For Animations
  useEffect(() => {
    dispatch(selectedMenuCreator(''));
    const disableOpacity = setTimeout(() => dispatch(changeDetectedCreator(false)), 100);
    return () => clearTimeout(disableOpacity);
  }, []);

  // Props to pass
  const projects = {
    subject,
    header: '',
    content: '',
    setState: e => updateStates(e),
    icon
  };
  
  const btns = {
    left: <PageBtn direction='left' forRef={container} />,
    right: <PageBtn direction='right' forRef={container} />
  };

  const indicator = <PageIndicator forRef={container} />

  return (
    <div
      className="Works"
      css={css`
        margin: 30px auto;
        border-radius: 10px;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
        ${flex.vertical}
        width: var(--background-width);
        max-width: 1920px;
        height: 100%;
        background-color: white;
        opacity: ${changeStatus ? '0' : '100%'};
        transition: all 0.3s;
        overflow: hidden;
        @media (orientation: portrait) and (min-width: 600px) {
          height: max-content;
        }
        @media (orientation: landscape) and (max-width: 1023px) {
          margin: 0;
        }
      `}
    >
      <Common
        heading='WORKS'
        passed={<GenSection data={projects} parentsHeader='WORKS' />}
      />
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(modalHandlerCreator(boolean))}
        componentInDisplay={Projects}
        buttons={btns}
        indicator={indicator}
        forRef={container} 
      />
    </div>
  );
};

export default Works;