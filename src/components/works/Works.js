/* eslint-disable react-hooks/exhaustive-deps */
/* Dependencies */
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
import { flex, sizes } from '../../styles/presets';

/* Component Body */
const Works = () => {
  const modalState = useSelector(state => state.modalState);
  const changeStatus = useSelector(state => state.isChangeDetected);
  const selectedProject = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  const dispatch = useDispatch();
  const { preview: icon, headers: subject } = projectsData;

  const updateStates = e => {
    dispatch(modalHandlerCreator(true));
    dispatch(selectedProjectCreator(e.target.dataset.project));
    dispatch(isChangingProjectCreator(-100 * list.indexOf(e.target.dataset.project)));
  }

  const projects = {
    subject,
    header: '',
    content: '',
    setState: e => updateStates(e),
    icon
  };
  
  // 다른걸로 대체할 방법 찾기
  useEffect(() => {
    dispatch(projectsListCreator(projectsData.headers));
  }, []);

  useEffect(() => {
    dispatch(selectedMenuCreator(''));
    const disableOpacity = setTimeout(() => dispatch(changeDetectedCreator(false)), 100);
    return () => clearTimeout(disableOpacity);
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
      <Common heading='WORKS' passed={<GenSection data={projects} />} />
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(modalHandlerCreator(boolean))}
        componentInDisplay={Projects}
      />
    </div>
  );
};

export default Works;