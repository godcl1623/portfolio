/* Dependencies */
// libraries
import React from 'react';
import { useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { selectedMenuCreator } from '../actions';
// modules
import Common from './Common';
import tools from '../modules/customfunctions';
import { selfInfo, introduction, skills } from '../db/aboutData';
import { flex, sizes } from '../styles/presets';

const { genContent, genSection } = tools;

/* Component Body */
const About = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(selectedMenuCreator(''));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="About"
      css={css`
        ${flex.vertical}
        ${sizes.full}
      `}
    >
      {/* 공통 양식 컴포넌트 */}
      <Common heading="ABOUT" selfInfo={genContent(selfInfo)} sections={genSection(introduction, skills)} />
    </div>
  );
};

export default About;