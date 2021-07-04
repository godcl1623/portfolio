/* Dependencies */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdHome } from 'react-icons/md';
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
  changeDetectedCreator } from '../../actions';
// custom module
import { icon, subject, iconInfo } from '../../db/worksData';
import { flex, sizes } from '../../styles/presets';

/* Component Body */
const Works = () => {
  const modalState = useSelector(state => state.modalState);
  const changeStatus = useSelector(state => state.isChangeDetected);
  const dispatch = useDispatch();
  const history = useHistory();

  const updateStates = e => {
    dispatch(modalHandlerCreator(true));
    dispatch(selectedProjectCreator(e.target.dataset.project));
  }

  const handleClick = () => {
    dispatch(changeDetectedCreator(true));
    setTimeout(() => history.push('/'), 500);
    dispatch(selectedMenuCreator(''));
  };

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
      <div
        className="Common"
        css={css`
          padding: 0 50px;
          ${sizes.full}
        `}
      >
        <div
          className="header"
          css={css`
            padding: 20px 0;
            ${flex.horizontal.center}
            position: relative;
          `}
        >
          {/* 홈 버튼 */}
          <button
            onClick={handleClick}
            css={css`
              border: none;
              border-radius: 7px;
              padding: 2px;
              width: 30px;
              height: 30px;
              box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
              position: absolute;
              left: 30px;
              cursor: pointer;

              :hover {
                filter: brightness(90%);
              }

              :active {
                transform: scale(0.95);
              }
            `}
          >
            <MdHome
              css={css`
                ${sizes.full}
              `}
            />
          </button>
          {/* 구획 제목 */}
          <h1
            css={css`
              font-size: 50px;
            `}
          >WORKS</h1>
        </div>
      </div>
      <hr
        css={css`
          border-color: white;
        `}
      />
      <GenSection test={projects} />
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(modalHandlerCreator(boolean))}
        componentInDisplay={Projects}
      />
    </div>
  );
};

export default Works;