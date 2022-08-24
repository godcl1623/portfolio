import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */

import { setProjectIndex } from 'slices';
import { isEqual } from 'utils/capsuledConditions';
import projectsData from 'assets/db/projectsData';

import { updateProjectState } from 'utils/customfunctions';
import useDisableClick from './hooks/useDisableClick';

import { pageButtonContainerStyle, pageButtonsStyle } from './styles/pageButtonStyle';

const PageBtn = ({ direction }) => {
  const selectedProjectIndex = useSelector(({ sliceReducers }) => sliceReducers.selectedProjectIndex);

  const buttonElement = React.useRef();

  const dispatch = useDispatch();

  const { headers } = projectsData;
  const buttonText = isEqual(direction, 'left') ? '◀' : '▶';

  function handleClick() {
    const updateProjectIndex = newIndex => dispatch(setProjectIndex(newIndex));
    updateProjectState(updateProjectIndex, buttonText, selectedProjectIndex);
  }

  useDisableClick(buttonElement.current, selectedProjectIndex, headers.length);

  return (
    <div
      className={`container ${direction}`}
      css={pageButtonContainerStyle}
    >
      <button
        className={`buttonElement ${direction}`}
        ref={buttonElement}
        css={pageButtonsStyle(direction)}
        onClick={handleClick}
      >{ buttonText }</button>
    </div>
  );
};

export default React.memo(PageBtn);