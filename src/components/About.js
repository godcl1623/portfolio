/* Dependencies */
// libraries
import React from 'react';
// modules
import Common from './Common';
import tools from '../modules/customfunctions';
import { selfInfo, introduction, skills } from '../db/aboutData';

const { genContent, genSection } = tools;
// data to send as props


// Component Body
const About = () => (
  <div className="About">
    {/* 공통 양식 컴포넌트 */}
    <Common heading="About" selfInfo={genContent(selfInfo)} sections={genSection(introduction, skills)} />
  </div>
);

export default About;