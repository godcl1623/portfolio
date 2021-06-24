import React from 'react';

const BodySection = () => (
  <div className="container 2" style={{ border: '1px solid black', width: '100%' }}>
    <h1 style={{ border: '1px solid black' }}>Projects</h1>
    <div className="image" style={{ border: '1px solid black', width: '80%', height: '50px'}} />
    <div className="icon-container" style={{ border: '1px solid black', width: '80%', height: '50px'}} />
    <p className="projects-comments" style={{ border: '1px solid black', width: '80%', height: '50px'}}>프로젝트 설명</p>
    <div className="link-container" style={{ border: '1px solid black', width: '80%', height: '50px'}}>
      <a href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</a>
      <a href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</a>
    </div>
  </div>
);

export default BodySection;