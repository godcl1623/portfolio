/* ***** Dependencies ***** */
// libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// action creators
import { isChangingProjectCreator, selectedProjectCreator } from '../../../../actions';
// modules
import { flex, mediaQuery } from '../../../../styles/presets';

/* ***** Component Body ***** */
const PageIndicator = props => {
  // States
  const selectedProject = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  // redux - dispatch
  const dispatch = useDispatch();
  // Component-specific Functions
  const coords = () => {
    if (props.forRef.current) {
      return props.forRef.current.childNodes[1].offsetWidth + 40;
    }
  }

  const setState = event => {
    const selectedOne = event.target.dataset.class;
    const selectedIndex = list.indexOf(selectedOne);
    const movingCoords = -coords() * selectedIndex;
    const projectsList = document.querySelector('.Projects');
    projectsList.style.transition = 'all 0.4s';
    dispatch(isChangingProjectCreator(movingCoords));
    dispatch(selectedProjectCreator(selectedOne));
  }

  const makeChkboxes = list.map(project => {
    const isChecked = project === selectedProject;
    const number = project.split(' ')[1];
    return (
      <React.Fragment
        key={`fragment${number}`}
      >
        <input
          key={`input${number}`}
          name={project}
          type="checkbox"
          checked={isChecked}
          onChange={() => {}}
          css={css`
          display: none;
          `}
        />
        <label
          key={`label${number}`}
          htmlFor={project}
          data-class={project}
          onClick={e => setState(e)}
          css={css`
            margin: 0.938rem;
            border: 0.063rem solid transparent;
            border-radius: 50%;
            padding: 0.063rem;
            -webkit-box-shadow: 0 0 0.625rem 0.125rem var(--box-shadow);
            box-shadow: 0 0 0.625rem 0.125rem var(--box-shadow);
            min-width: 0.625rem;
            min-height: 0.625rem;
            width: 1.2vw;
            height: 1.2vw;
            background: var(--white);
            opacity: 90%;
            cursor: pointer;
            :hover {
              -webkit-filter: brightness(0.9);
              filter: brightness(0.9);
            }
            :active {
              -webkit-transform: scale(0.95);
              -ms-transform: scale(0.95);
              transform: scale(0.95);
            }
          `}
        >
          　
        </label>
      </React.Fragment>
    );
  });

  return (
    <div
      className="page-indicator"
      css={css`
        min-height: 3.125rem;
        ${flex.horizontal.center}
        position: fixed;
        left: 50%;
        bottom: 0;
        ${mediaQuery.setMobile} {
          bottom: -0.625rem;
        }
        @media (orientation: landscape) and (max-width: 1023px) {
          bottom: -25px;
        }
        -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);

        input[type='checkbox']:checked + label {
          background: var(--point-light);
          opacity: 90%;
        }
      `}
    >
      { makeChkboxes }
    </div>
  );
};

export default React.memo(PageIndicator);