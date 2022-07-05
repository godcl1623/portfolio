import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { setProjectIdx } from '../../../../slices';

import projectsData from '../../../../db/projectsData';
import { updateNextProjectState } from '../../../../modules/customfunctions';
import { flex } from '../../../../styles/presets';

const PageBtn = ({ direction, forRef }) => {
  const selectedProjectIdx = useSelector(state => state.sliceReducers.selectedProjectIdx);

  const btn = React.useRef();

  const dispatch = useDispatch();

  const btnText = direction === 'left' ? '◀' : '▶';

  const { headers } = projectsData;
  const disableClick = (target, value) => {
    target.disabled = value;
  }

  useEffect(() => {
    if (btn.current) {
      if (selectedProjectIdx > headers.length + 2 - 3) {
        disableClick(btn.current, true);
        setTimeout(() => {
          disableClick(btn.current, false);
        }, 500);
      } else if (selectedProjectIdx < 0) {
        disableClick(btn.current, true);
        setTimeout(() => {
          disableClick(btn.current, false);
        }, 500);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProjectIdx, btn.current])

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
        ref={btn}
        css={css`
          border: 0.063rem solid transparent;
          border-radius: 50%;
          -webkit-box-shadow: 0 0 0.188rem 0.188rem rgba(0, 0, 0, 0.3);
                  box-shadow: 0 0 0.188rem 0.188rem rgba(0, 0, 0, 0.3);
          min-width: 3.125rem;
          width: 3vw;
          min-height: 3.125rem;
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
            -webkit-filter: brightness(0.9);
                    filter: brightness(0.9);
          }

          :active {
            -webkit-filter: brightness(1.1);
                    filter: brightness(1.1);
            -webkit-transform: scale(0.95);
                -ms-transform: scale(0.95);
                    transform: scale(0.95);
          }
        `}
        onClick={() => {
          updateNextProjectState(
            btnText,
            dispatch,
            setProjectIdx,
            selectedProjectIdx
          );
        }}
      >{ btnText }</button>
    </div>
  );
};

export default React.memo(PageBtn);