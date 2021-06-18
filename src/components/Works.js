import React, { useState } from 'react';
import Common from './Common';
import Modal from './Modal';
import { genSection } from './modules/customfunctions';

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = {
    icon: ['1', '2', '3'],
    subject: ['프로젝트 1', '프로젝트 2', '프로젝트 3'],
    header: '',
    content: '',
    setState: () => setIsModalOpen(true)
  };

  return (
    <div className="Works">
      <Common heading="Works" sections={genSection(projects)} />
      <Modal modalState={isModalOpen} changeState={setIsModalOpen} />
    </div>
  );
};

export default Works;