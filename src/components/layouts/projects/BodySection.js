import React from 'react';
import { useSelector } from 'react-redux';
import { imageContainer, iconContainer, projectComment } from './projectsData';
import tools from '../../../modules/customfunctions';

const { selectedHeader } = tools;

const BodySection = () => {
  const selectedProject = useSelector(state => state.selectedProject);

  return (
    <div className="container 2" style={{ border: '1px solid black', width: '100%' }}>
      {/* <h1 style={{ border: '1px solid black' }}>Projects</h1> */}
      { selectedHeader(selectedProject) }
      { imageContainer(2) }
      { iconContainer(7) }
      <p className="projects-comments" style={{ border: '1px solid black', width: '80%', height: '50px'}}>{ projectComment }</p>
      <div className="link-container" style={{ border: '1px solid black', width: '80%', height: '50px'}}>
        <a href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</a>
        <a href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</a>
      </div>
    </div>
  );
};

export default BodySection;