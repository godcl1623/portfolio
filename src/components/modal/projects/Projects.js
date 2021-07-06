import React from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PageBtn from './layouts/PageBtn';
import BodySection from './layouts/BodySection';
import projectsData from '../../../db/projectsData';

const Projects = () => {
  const modalState = useSelector(state => state.modalState);

  const { headers } = projectsData;
  const Bodies = data => headers.map((header, index) => {
    const { images, icons, comments } = data;

    return (
      <BodySection
        key={index + 1}
        header={header}
        images={images[header]}
        icons={icons[header]}
        comments={comments[index]}
        selectedNumber={`project ${index + 1}`}
      />
    );
  });

  return (
    <div className="Projects"
      css={css`
        display: flex;
        width: 100%;
        height: 100%;
        justifyContent: center;
        opacity: ${modalState ? '100%' : '0'};
        transition: all 0.3s;
      `}
    >
      <PageBtn direction='left' />
      {/* <BodySection /> */}
      { Bodies(projectsData) }
      <PageBtn direction='right' />
    </div>
  );
};

export default Projects;