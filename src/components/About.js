/* Dependencies */
// libraries
import React from 'react';
// modules
import Common from './Common';
import tools from '../modules/customfunctions';

const { genContent, genSection } = tools;
// data to send as props
const selfInfo = {
  name: '이치행',
  birth: '1992.07.31',
  phone: '(Tel) 010-6313-9037',
  mail: '(email) godcl1623@gmail.com'
};

const introduction = {
  header: 'Introduction',
  icon: '',
  subject: ['개발 동기', '관심사', 'test'],
  content: ['lorem ipsum dolor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor.', 'test']
};

const skills = {
  header: 'Skills',
  icon: ['1', '2', '3'],
  subject: ['html', 'css', 'javascript'],
  content: ['Donec sagittis laoreet lectus vel ullamcorper. Nulla.', 'Quisque quam augue, aliquam sit amet metus.', 'In hac habitasse platea dictumst. Maecenas condimentum.']
}

// Component Body
const About = () => (
  <div className="About">
    {/* 공통 양식 컴포넌트 */}
    <Common heading="About" selfInfo={genContent(selfInfo)} sections={genSection(introduction, skills)} />
  </div>
);

export default About;