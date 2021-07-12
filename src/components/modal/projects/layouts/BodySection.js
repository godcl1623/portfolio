import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from '../../../../styles/presets';
import { selectedHeader, imageContainer, iconContainer } from '../../../../modules/customfunctions';
import { A } from '../../../../styles/elementsPreset';
import DividePara from '../../../utils/DividePara';
import { isChangingProjectCreator, selectedProjectCreator } from '../../../../actions';

const BodySection = props => {
  const selectedProject = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  const readyToMove = useSelector(state => state.isReadyToMove);
  const dispatch = useDispatch();

  const setState = event => {
    const selectedOne = event.target.dataset.class;
    const foo = list.indexOf(selectedOne);
    const bar = -100 * foo;
    dispatch(isChangingProjectCreator(bar));
    dispatch(selectedProjectCreator(selectedOne));
  }

  const makeChkboxes = list.map(project => {
    // const selectedProjectNumber = selectedProject.split(' ')[1];
    const isChecked = project === selectedProject;
    const number = project.split(' ')[1];
    return (
      <React.Fragment
        key={`fragment${number}`}
      >
        {/* 라벨 이용해서 꾸미기 */}
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
            box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
            // min-width: 50px;
            // min-height: 50px;
            width: 1.2vw;
            height: 1.2vw;
            background: rgba(255, 255, 255, 0.1);
            cursor: pointer;
            :hover {
              filter: brightness(0.9);
            }
            :active {
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
        padding: 50px 0;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: ${document.documentElement.offsetHeight > 1440 ? 'center' : 'space-between'};
      `}
    >
      { selectedHeader(props.header) }
      { imageContainer(props.images) }
      { iconContainer(props.icons.length) }
      {/* <p
        className="projects-comments"
        css={css`
          margin: 40px 0;
          padding: 0 10%;
          width: 100%;
          height: auto;
          text-align: justify;
        `}
      >{ props.comments }</p> */}
      <div css={css`
        margin-bottom: 50px;
        width: 80%;
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
        `}
      >
        <A href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</A>
        <A href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</A>
      </div>
      <div
        className="page-indicator"
        css={css`
          min-height: 50px;
          border: 1px solid black;
          ${flex.horizontal.center}
          position: fixed;
          left: 50%;
          bottom: 1%;
          transform: translate(-50%, -50%);

          input[type='checkbox']:checked + label {
            background: rgba(30, 30, 30, 0.1);
          }
        `}
      >
        { makeChkboxes }
      </div>
    </div>
  );
};

export default BodySection;