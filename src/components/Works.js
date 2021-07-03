/* Dependencies */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import Common from './Common';
import Modal from './Modal';
import Projects from './layouts/Projects';
// action creator
import {
  modalHandlerCreator,
  selectedProjectCreator,
  projectsListCreator,
  selectedMenuCreator } from '../actions';
// custom module
import tools from '../modules/customfunctions';
import { icon, subject, iconInfo } from '../db/worksData';
// inits
const { genSection } = tools;

/* Component Body */
const Works = () => {
  const modalState = useSelector(state => state.modalState);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Works">
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