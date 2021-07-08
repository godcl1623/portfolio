import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from '../../../../styles/presets';
import { selectedProjectCreator, isReadyToMoveCreator, isChangingProjectCreator } from '../../../../actions';
import projectsData from '../../../../db/projectsData';
import { slideStartPoint } from '../../../../modules/customfunctions';

const PageBtn = ({ direction }) => {
  const current = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  const changeState = useSelector(state => state.isChangingProject);
  const readyToMove = useSelector(state => state.isReadyToMove);
  const dispatch = useDispatch();
  const { headers } = projectsData;

  const maxChangeValue = slideStartPoint(headers);

  React.useEffect(() => {
    const foo = document.querySelectorAll('button');
    const fee = (target, value) => {
      target.disabled = value;
    }
    if (readyToMove) {
      foo.forEach(bar => fee(bar, true));
    } else {
      foo.forEach(bar => fee(bar, false));
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
    const test = [projectText, projectNumber].join(' ');
    dispatch(selectedProjectCreator(test));
  };

  const changeActualProject = btnText => {
    const foo = document.querySelector('.Projects');
    foo.style.transition = 'all 0.4s';
    if (btnText === '▶') {
      if (-changeState === maxChangeValue * 2) {
        dispatch(isChangingProjectCreator(changeState-100));
        dispatch(isReadyToMoveCreator(true));
        setTimeout(() => {
          foo.style.transition = ''
          dispatch(isChangingProjectCreator(0));
        }, 400);
      } else {
        dispatch(isChangingProjectCreator(changeState-100));
      }
    } else if (btnText === '◀') {
      if (changeState === 0) {
        dispatch(isChangingProjectCreator(changeState+100));
        dispatch(isReadyToMoveCreator(true));
        setTimeout(() => {
          foo.style.transition = '';
          dispatch(isChangingProjectCreator(-maxChangeValue * 2));
        }, 400);
      } else {
        dispatch(isChangingProjectCreator(changeState+100));
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
          width: 50px;
          height: 50px;
          position: absolute;
          top: 45%;
          ${direction === 'left' ? 'left: 90px;' : 'right: 90px;'};
          cursor: pointer;
          background-color: rgba(240, 240, 240, 0.5);

          :hover {
            filter: brightness(0.9);
          }

          :active {
            filter: brightness(1.1);
            transform: scale(0.95);
          }

          :disabled {
            background-color: rgba(240, 240, 240, 0.5);
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