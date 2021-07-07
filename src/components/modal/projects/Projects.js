import React from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PageBtn from './layouts/PageBtn';
import BodySection from './layouts/BodySection';
import projectsData from '../../../db/projectsData';
import { slideStartPoint } from '../../../modules/customfunctions';

const Projects = () => {
  const modalState = useSelector(state => state.modalState);
  const changedValue = useSelector(state => state.isChangingProject);
  const selectedProject = useSelector(state => state.selectedProject);
  const list = useSelector(state => state.projectsList);
  const changeState = useSelector(state => state.isChangeDetected);

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
        className={`Project${index + 1}`}
        // selectedNumber={`Project ${index + 1}`}
      />
    );
  });

  return (
    <>
      <PageBtn direction='left' />
      <div className="Projects"
        css={css`
          display: flex;
          width: ${100 * headers.length}%;
          height: 100%;
          justifyContent: center;
          opacity: ${modalState ? '100%' : '0'};
          transition: all 0.5s;
          position: relative;
          left: ${slideStartPoint(headers) + changedValue}%;
          overflow-x: hidden;
        `}
      >
        { Bodies(projectsData) }
      </div>
      <PageBtn direction='right' />
    </>
  );
};

export default Projects;