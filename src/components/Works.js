import React from 'react';
import Common from './Common';
import { genSection } from './modules/customfunctions';

const projects = {
  icon: ['1', '2', '3'],
  subject: ['프로젝트 1', '프로젝트 2', '프로젝트 3'],
  header: '',
  content: ''
};

const Works = () => (
  <div className="Works">
    <Common heading="Works" sections={genSection(projects)} />
  </div>
);

export default Works;