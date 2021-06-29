import React from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, border } from '../../../styles/presets';
import { imageContainer, iconContainer, projectComment } from '../../../db/projectsData';
import tools from '../../../modules/customfunctions';

const { selectedHeader } = tools;

const BodySection = () => {
  const selectedProject = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);

  const makeChkboxes = list.map(project => {
    const selectedProjectNumber = selectedProject.split(' ')[1];
    const isChecked = project === selectedProjectNumber;
    return (
      <input key={project} type="checkbox" checked={isChecked} onChange={() => {}}/>
    );
  });

  return (
    <div
      className="container-body"
      css={css`
        ${border}
        max-width: 100%;
        overflow-y: scroll;
      `}
    >
      { selectedHeader(selectedProject) }
      { imageContainer(2) }
      { iconContainer(7) }
      <p className="projects-comments" style={{ border: '1px solid black', width: '80%', height: '50px'}}>{ projectComment }</p>
      <div className="link-container" style={{ border: '1px solid black', width: '80%', height: '50px'}}>
        <a href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</a>
        <a href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</a>
      </div>
      { makeChkboxes }
    </div>
  );
};

export default BodySection;