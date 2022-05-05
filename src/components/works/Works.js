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
import Carousel from '../utils/Carousel';
import BodySection from '../modal/projects/layouts/BodySection';
// action creator
import {
  setModalState,
  setSelectedProject,
  setProjectsList,
  setSelectedMenu,
  setIsChanged,
  setIsChangingProject
} from '../../slices';
// custom module
import projectsData from '../../db/projectsData';
import { flex } from '../../styles/presets';

/* ***** Component Body ***** */
const Works = () => {
  // States
  const modalState = useSelector(state => state.sliceReducers.modalState);
  const changeStatus = useSelector(state => state.sliceReducers.isChangeDetected);
  const list = useSelector(state => state.sliceReducers.projectsList);
  // redux - dispatch
  const dispatch = useDispatch();
  // refs
  const container = React.useRef();
  // module extracting
  const { preview: icon, headers: subject } = projectsData;
  const processedData = [subject[subject.length - 1], ...subject, subject[0]];
  const carouselItems = processedData.map((sub, idx) => {
    const originalIdx = subject.indexOf(sub);
    return (
      <React.Fragment key={`carousel_item_${idx}`}>
        <BodySection
          header={sub}
          images={projectsData.images[sub]}
          comments={projectsData.comments[originalIdx]}
          links={projectsData.links[originalIdx]}
          className={`Project${originalIdx + 1}`}
        />
      </React.Fragment>
    );
  });

  // Component-specific Functions
  const coords = () => {
    if (container.current) {
      return container.current.childNodes[1].offsetWidth + 40;
    }
  }

  const updateStates = e => {
    dispatch(setModalState(true));
    dispatch(setSelectedProject(e.target.dataset.project));
    dispatch(setIsChangingProject(-coords() * list.indexOf(e.target.dataset.project)));
  }

  // Update 'projectsList'
  useEffect(() => {
    dispatch(setProjectsList(projectsData.headers));
  }, []);

  // For Animations
  useEffect(() => {
    dispatch(setSelectedMenu(''));
    const disableOpacity = setTimeout(() => dispatch(setIsChanged(false)), 100);
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

  // const indicator = <PageIndicator forRef={container} />

  return (
    <div
      className="Works"
      css={css`
        margin: 1.875rem auto;
        border-radius: 0.625rem;
        box-shadow: 0 0 0.625rem 0.625rem rgba(0, 0, 0, 0.3);
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
        changeState={boolean => dispatch(setModalState(boolean))}
        // componentInDisplay={Projects}
        // buttons={btns}
        componentInDisplay={<Carousel data={carouselItems} mode='button' />}
        // indicator={indicator}
        forRef={container} 
      />
    </div>
  );
};

export default Works;