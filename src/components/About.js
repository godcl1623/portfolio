/* Dependencies */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdKeyboardArrowUp } from 'react-icons/md';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedMenuCreator(''));
    const disableOpacity = setTimeout(() => dispatch(changeDetectedCreator(false)), 100);
    return () => clearTimeout(disableOpacity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

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
        position: relative;
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
      <Button
        onClick={() => navToTop()}
        css={css`
          border-radius: 50%;
          padding: 0;
          width: 30px;
          height: 30px;
          position: fixed;
          top: 92vh;
          right: 2.5vw;
        `}
      >
        <MdKeyboardArrowUp
          css={css`
            width: 100%;
            height: 100%;
          `}
        />
      </Button>
    </div>
  );
};

export default About;