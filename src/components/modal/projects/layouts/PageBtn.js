import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from '../../../../styles/presets';
import { selectedProjectCreator, isReadyToMoveCreator, isChangingProjectCreator } from '../../../../actions';
import projectsData from '../../../../db/projectsData';
// import { slideStartPoint } from '../../../../modules/customfunctions';

const PageBtn = ({ direction, forRef }) => {
  const current = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  const changeState = useSelector(state => state.isChangingProject);
  const readyToMove = useSelector(state => state.isReadyToMove);
  const dispatch = useDispatch();
  const { headers } = projectsData;

  const coords = () => {
    if (forRef.current) {
      return forRef.current.childNodes[1].offsetWidth + 40;
    }
  }

  const maxChangeValue = coords() * (headers.length - 1);

  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    const disableClick = (target, value) => {
      target.disabled = value;
    }
    if (readyToMove) {
      buttons.forEach(button => disableClick(button, true));
    } else {
      buttons.forEach(button => disableClick(button, false));
    }
  }, [readyToMove]);

  const updateNextProjectState = btnText => {
    const projectText = current.split(' ')[0];
    let projectNumber = Number(current.split(' ')[1]);
    projectNumber = btnText === '▶' ? projectNumber + 1 : projectNumber - 1;
    if (projectNumber <= 0) {
      projectNumber = list.length;
    } else if (projectNumber > list.length) {
      projectNumber = 1;
    }
    const updatedText = [projectText, projectNumber].join(' ');
    dispatch(selectedProjectCreator(updatedText));
  };

  const changeActualProject = btnText => {
    const projects = document.querySelector('.Projects');
    projects.style.transition = 'all 0.4s';
    if (btnText === '▶') {
      if (-changeState === maxChangeValue) {
        dispatch(isChangingProjectCreator(changeState-coords()));
        dispatch(isReadyToMoveCreator(true));
        setTimeout(() => {
          projects.style.transition = ''
          dispatch(isChangingProjectCreator(0));
        }, 400);
      } else {
        dispatch(isChangingProjectCreator(changeState-coords()));
      }
    } else if (btnText === '◀') {
      if (changeState === 0) {
        dispatch(isChangingProjectCreator(changeState+coords()));
        dispatch(isReadyToMoveCreator(true));
        setTimeout(() => {
          projects.style.transition = '';
          dispatch(isChangingProjectCreator(-maxChangeValue));
        }, 400);
      } else {
        dispatch(isChangingProjectCreator(changeState+coords()));
      }
    }
  };

  const btnText = direction === 'left' ? '◀' : '▶';

  return (
    <div
      className={`container ${direction}`}
      css={css`
        ${flex.vertical}
        z-index: 2;
      `}
    >
      <button
        className={`btn ${direction}`}
        css={css`
          border: 1px solid transparent;
          border-radius: 50%;
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
          min-width: 50px;
          width: 3vw;
          min-height: 50px;
          height: 3vw;
          position: absolute;
          top: 45%;
          ${direction === 'left' ? 'left: 5%' : 'right: 5%'};
          cursor: pointer;
          background-color: var(--point-light);
          opacity: 50%;
          color: var(--point-dark);
          font-size: 1vw;

          :hover {
            filter: brightness(0.9);
          }

          :active {
            filter: brightness(1.1);
            transform: scale(0.95);
          }
        `}
        onClick={() => {
          updateNextProjectState(btnText);
          changeActualProject(btnText);
        }}
      >{ btnText }</button>
    </div>
  );
};

export default PageBtn;