import React from 'react';
import PageBtn from './layouts/PageBtn';
import BodySection from './layouts/BodySection';

const Projects = () => (
    <div className="Projects" style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center'}}>
      <PageBtn direction='left' />
      <BodySection />
      <PageBtn direction='right' />
    </div>
  );

export default Projects;