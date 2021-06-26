import React from 'react';
import PageBtn from './projects/PageBtn';
import BodySection from './projects/BodySection';

const Projects = () => (
    <div className="Projects" style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center'}}>
      <PageBtn direction='left' />
      <BodySection />
      <PageBtn direction='right' />
    </div>
  );

export default Projects;