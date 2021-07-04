/* Dependencies */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// components
import Common from './Common';
import Modal from './Modal';
import Projects from './layouts/Projects';
// action creator
import {
  modalHandlerCreator,
  selectedProjectCreator,
  projectsListCreator,
  selectedMenuCreator,
  changeDetectedCreator } from '../actions';
// custom module
import tools from '../modules/customfunctions';
import { icon, subject, iconInfo } from '../db/worksData';
import { flex, sizes } from '../styles/presets';
// inits
const { genSection } = tools;

/* Component Body */
const Works = () => {
  const modalState = useSelector(state => state.modalState);
  const changeStatus = useSelector(state => state.isChangeDetected);
  const dispatch = useDispatch();

  const updateStates = e => {
    dispatch(modalHandlerCreator(true));
    dispatch(selectedProjectCreator(e.target.dataset.project));
  }

  const projects = {
    iconInfo,
    subject,
    header: '',
    content: '',
    setState: e => updateStates(e),
    icon
  };
  
  // 다른걸로 대체할 방법 찾기
  useEffect(() => {
    dispatch(projectsListCreator(projects.iconInfo));
  }, [dispatch, projects.iconInfo]);

  useEffect(() => {
    dispatch(selectedMenuCreator(''));
    const disableOpacity = setTimeout(() => dispatch(changeDetectedCreator(false)), 100);
    return () => clearTimeout(disableOpacity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="Works"
      css={css`
        margin: 30px auto;
        margin-bottom: 23px;
        border-radius: 10px;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
        ${flex.vertical}
        ${sizes.full}
        width: 80%;
        background-color: white;
        opacity: ${changeStatus ? '0' : '100%'};
        transition: all 0.3s;
      `}
    >
      <Common heading="WORKS" sections={genSection(projects)} />
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(modalHandlerCreator(boolean))}
        componentInDisplay={Projects}
      />
    </div>
  );
};

export default Works;