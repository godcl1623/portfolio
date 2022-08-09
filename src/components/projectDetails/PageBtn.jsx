import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */

import { setProjectIdx } from 'slices';
import { isEqual } from 'utils/capsuledConditions';
import projectsData from 'assets/db/projectsData';

import { updateProjectState } from 'utils/customfunctions';
import useDisableClick from './hooks/useDisableClick';

import { pageButtonContainerStyle, pageButtonsStyle } from './styles/pageBtnStyle';

const PageBtn = ({ direction }) => {
  const selectedProjectIdx = useSelector(state => state.sliceReducers.selectedProjectIdx);

  const buttonElement = React.useRef();

  const dispatch = useDispatch();

  const { headers } = projectsData;
  const buttonText = isEqual(direction, 'left') ? '◀' : '▶';

  function handleClick() {
    const updateProjectIndex = newIndex => dispatch(setProjectIdx(newIndex));
    updateProjectState(updateProjectIndex, buttonText, selectedProjectIdx);
  }

  useDisableClick(buttonElement.current, selectedProjectIdx, headers.length);

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