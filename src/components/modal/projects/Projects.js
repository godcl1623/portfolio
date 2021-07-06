import React from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PageBtn from './layouts/PageBtn';
import BodySection from './layouts/BodySection';

const Projects = () => {
  const modalState = useSelector(state => state.modalState);
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
      <BodySection />
      <PageBtn direction='right' />
    </div>
  );
};

export default Projects;