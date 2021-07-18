/* ***** Dependencies ***** */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// action creators
import { selectedProjectCreator, isReadyToMoveCreator, isChangingProjectCreator } from '../../../../actions';
// modules
import projectsData from '../../../../db/projectsData';
import { updateNextProjectState, changeActualProject } from '../../../../modules/customfunctions';
import { flex } from '../../../../styles/presets';

/* ***** Component Body ***** */
const PageBtn = ({ direction, forRef }) => {
  // States
  const selectedProject = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  const changeState = useSelector(state => state.isChangingProject);
  const readyToMove = useSelector(state => state.isReadyToMove);
  // redux - dispatch
  const dispatch = useDispatch();
  // Props
  const btnText = direction === 'left' ? '◀' : '▶';
  // module extracting
  const { headers } = projectsData;
  // Component-specific Functions
  const coords = () => {
    if (forRef.current) {
      return forRef.current.childNodes[1].offsetWidth + 40;
    }
  }

  const maxChangeValue = coords() * (headers.length - 1);

  const disableClick = (target, value) => {
    target.disabled = value;
  }

  // Disable Buttons
  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    if (readyToMove) {
      buttons.forEach(button => disableClick(button, true));
    } else {
      buttons.forEach(button => disableClick(button, false));
    }
  }, [readyToMove]);

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
          updateNextProjectState(
            btnText,
            selectedProject,
            list,
            dispatch,
            selectedProjectCreator
          );
          changeActualProject(
            btnText,
            changeState,
            maxChangeValue,
            dispatch,
            isChangingProjectCreator,
            isReadyToMoveCreator,
            coords
          );
        }}
      >{ btnText }</button>
    </div>
  );
};

export default React.memo(PageBtn);