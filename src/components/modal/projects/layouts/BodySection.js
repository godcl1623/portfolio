import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, mediaQuery } from '../../../../styles/presets';
import { selectedHeader, imageContainer, iconContainer } from '../../../../modules/customfunctions';
import { A } from '../../../../styles/elementsPreset';
import DividePara from '../../../utils/DividePara';
import { isChangingProjectCreator, selectedProjectCreator } from '../../../../actions';

const BodySection = props => {
  const selectedProject = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  const dispatch = useDispatch();

  const setState = event => {
    const selectedOne = event.target.dataset.class;
    const selectedIndex = list.indexOf(selectedOne);
    const movingCoords = -100 * selectedIndex;
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
          margin: 0 5px;
          display: none;
          `}
        />
        <label
          key={`label${number}`}
          htmlFor={project}
          data-class={project}
          onClick={e => setState(e)}
          css={css`
            margin: 15px;
            border: 1px solid transparent;
            border-radius: 50%;
            padding: 1px;
            -webkit-box-shadow: 0 0 10px 2px var(--box-shadow);
            box-shadow: 0 0 10px 2px var(--box-shadow);
            min-width: 10px;
            min-height: 10px;
            width: 1.2vw;
            height: 1.2vw;
            background: var(--white);
            opacity: 70%;
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
      className={props.className}
      css={css`
        margin: 0 20px;
        max-width: 100%;
        border: 1px solid black;
        padding: 50px 0;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        @media (min-height: 1440px) and (max-width: 2559px) {
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
        }
      `}
    >
      { selectedHeader(props.header) }
      { imageContainer(props.images) }
      { iconContainer(props.icons.length) }
      <div css={css`
        margin-bottom: 50px;
        width: 80%;
        p {
          font-size: calc(var(--p) * 1.15);
        }
      `}>
        <DividePara paragraphs={props.comments} projects={true} />
      </div>
      <div
        className="link-container"
        css={css`
          width: 70%;
          height: 50px;
          ${flex.horizontal.center}
          justify-content: space-around;
          ${mediaQuery.setMobile} {
            position: relative;
            bottom: 30px;
          }

          a {
            padding: 10px 15px 15px;
            @media (max-width: 600px) {
              padding: 5px 10px 10px;
            }
            min-width: 85px;
            min-height: 35px;
            text-align: center;
            font-size: calc(var(--p) * 1.2);
          }
        `}
      >
        <A href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</A>
        <A href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</A>
      </div>
      <div
        className="page-indicator"
        css={css`
          min-height: 50px;
          ${flex.horizontal.center}
          position: fixed;
          left: 50%;
          bottom: 1%;
          ${mediaQuery.setMobile} {
            bottom: 0;
          }
          -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);

          input[type='checkbox']:checked + label {
            background: var(--point-light);
            opacity: 70%;
          }
        `}
      >
        { makeChkboxes }
      </div>
    </div>
  );
};

export default BodySection;