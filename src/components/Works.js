/* Dependencies */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import Common from './Common';
import Modal from './Modal';
import Projects from './layouts/Projects';
// action creator
import { modalHandler, selectedProject, projectsList } from '../actions';
// custom module
import tools from '../modules/customfunctions';
import { icon, subject } from '../db/worksData';
// inits
const { genSection } = tools;

/* Component Body */
const Works = () => {
  const modalState = useSelector(state => state.modalState);
  const dispatch = useDispatch();

  const updateStates = e => {
    dispatch(modalHandler(true));
    dispatch(selectedProject(e.target.dataset.project));
  }

  const projects = {
    icon,
    subject,
    header: '',
    content: '',
    setState: e => updateStates(e)
  };

  useEffect(() => {
    dispatch(projectsList(projects.icon));
  }, [dispatch, projects.icon]);

  return (
    <div className="Works">
      <Common heading="Works" sections={genSection(projects)} />
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(modalHandler(boolean))}
        componentInDisplay={Projects}
      />
    </div>
  );
};

export default Works;