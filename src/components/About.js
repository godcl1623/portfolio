/* Dependencies */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { selectedMenuCreator, changeDetectedCreator } from '../actions';
// modules
import Common from './Common';
import tools from '../modules/customfunctions';
import { selfInfo, introduction, skills } from '../db/aboutData';
import { flex, sizes } from '../styles/presets';
import { Button } from '../styles/elementsPreset';

const { genContent, genSection } = tools;

/* Component Body */
const About = () => {
  const changeStatus = useSelector(state => state.isChangeDetected);
  const readyStatus = useSelector(state => state.isReadyToMove);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedMenuCreator(''));
    const disableOpacity = setTimeout(() => dispatch(changeDetectedCreator(false)), 100);
    return () => clearTimeout(disableOpacity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="About"
      css={css`
        margin: 30px auto;
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
        ${flex.vertical}
        ${sizes.full}
        width: 80%;
        background-color: white;
        opacity: ${changeStatus ? '0' : '100%'};
        transition: all 0.3s;

        * {
          opacity: ${changeStatus ? '0' : '100%'};
          transition: all 0.3s;
        }
      `}
    >
      {/* 공통 양식 컴포넌트 */}
      <Common heading="ABOUT" selfInfo={genContent(selfInfo)} sections={genSection(introduction, skills)} />
      <Button></Button>
    </div>
  );
};

export default About;