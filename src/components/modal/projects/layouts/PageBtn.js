import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from '../../../../styles/presets';
import { selectedProjectCreator, isChangingProjectCreator } from '../../../../actions';

const PageBtn = ({ direction }) => {
  const current = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  const dispatch = useDispatch();
  const testFunc = btnText => {
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
    dispatch(isChangingProjectCreator(true));
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
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
          width: 50px;
          height: 50px;
          position: absolute;
          top: 45%;
          ${direction === 'left' ? 'left: 0;' : 'right: 0;'};
        `}
        onClick={() => testFunc(btnText)}
      >{ btnText }</button>
    </div>
  );
};

export default PageBtn;