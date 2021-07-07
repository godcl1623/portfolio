import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, border } from '../../../../styles/presets';
// import { imageContainer, iconContainer, projectComment } from '../../../../db/projectsData';
import tools from '../../../../modules/customfunctions';
import { A } from '../../../../styles/elementsPreset';
import { isChangingProjectCreator } from '../../../../actions';

const { selectedHeader, imageContainer, iconContainer } = tools();

const BodySection = props => {
  const selectedProject = useSelector(state => state.selectedProject);
  const projectChangingStat = useSelector(state => state.isChangingProject);
  const list = useSelector(state => state.projectsList);
  const dispatch = useDispatch();

  const makeChkboxes = list.map(project => {
    // const selectedProjectNumber = selectedProject.split(' ')[1];
    const isChecked = project === selectedProject;
    return (
      // 라벨 이용해서 꾸미기
      <input
        key={project}
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        css={css`
          margin: 0 5px;
        `}
      />
    );
  });

  return (
    <div
      className="container-body"
      css={css`
        margin: 0 20px;
        max-width: 100%;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        transition: all 0.3s;
      `}
    >
      { selectedHeader(props.header) }
      { imageContainer(props.images.length) }
      { iconContainer(props.icons.length) }
      <p
        className="projects-comments"
        css={css`
          margin: 40px 0;
          padding: 0 10%;
          width: 100%;
          height: auto;
          text-align: justify;
        `}
      >{ props.comments }</p>
      <div
        className="link-container"
        css={css`
          width: 100%;
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
          position: fixed;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, -50%);
        `}
      >
        { makeChkboxes }
      </div>
    </div>
  );
};

export default BodySection;