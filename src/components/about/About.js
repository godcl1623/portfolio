/* Dependencies */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import {
  selectedMenuCreator,
  changeDetectedCreator
} from '../../actions';
// components
import Common from '../utils/Common';
import GenContent from '../utils/GenContent';
import GenSection from '../utils/GenSection';
// modules
import { selfInfo, introduction, skills } from '../../db/aboutData';
import { flex } from '../../styles/presets';
import { Button } from '../../styles/elementsPreset';
import { debouncer } from '../../modules/customfunctions';

// Handler
const navToTop = () => {
  const about = document.querySelector('.About');
  about.scrollTo({
    top: 0,
    behavior: 'auto'
  });
};

const scrollHandler = () => {
  const topBtn = document.querySelector('.to-top');
  const displayPoint = document.querySelector('.area-header');
  const about = document.querySelector('.About');
  if (displayPoint) {
    if (about.scrollTop > displayPoint.offsetTop) {
      topBtn.style.opacity = '70%';
    } else {
      topBtn.style.opacity = '0';
    }
  }
};

const debouncedScrollHandler = debouncer(scrollHandler);

const childContent = (
  <React.Fragment>
    <GenContent object={selfInfo} />
    <GenSection data={introduction} fold={true} />
    <GenSection data={skills} fold={false} />
  </React.Fragment>
);

/* Component Body */
const About = () => {
  // Init Hooks
  const changeStatus = useSelector(state => state.isChangeDetected);
  const dispatch = useDispatch();

  // For Animations
  useEffect(() => {
    dispatch(selectedMenuCreator(''));
    const disableOpacity = setTimeout(() => dispatch(changeDetectedCreator(false)), 100);
    const about = document.querySelector('.About');
    about.addEventListener('scroll', debouncedScrollHandler);
    return () => {
      clearTimeout(disableOpacity);
      about.removeEventListener('scroll', debouncedScrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="About"
      css={css`
        margin: 30px auto;
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 10px 10px var(--box-shadow);
        ${flex.vertical}
        justify-content: space-between;
        width: var(--background-width);
        max-width: 1920px;
        // min-height: calc(100vh - 60px);
        height: 100%;
        background-color: var(--white);
        opacity: ${changeStatus ? '0' : '100%'};
        transition: all 0.3s;
        overflow-x: hidden;
        @media (orientation: portrait) {
          height: max-content;
        }

        @media (max-width: 1023px) and (orientation: landscape) {
          margin: 0;
        }

        *:not(.to-top) {
          opacity: ${changeStatus ? '0' : '100%'};
          transition: all 0.3s;
        }
      `}
    >
      <Common heading="ABOUT" passed={childContent} />
      <Button
        className="to-top"
        onClick={() => navToTop()}
        css={css`
          margin: 0 auto;
          border-radius: 50%;
          padding: 0;
          min-width: 30px;
          min-height: 30px;
          width: 2vw;
          height: 2vw;
          position: fixed;
          bottom: 3%;
          transition: opacity 0.3s;
          opacity: 0;
          background: var(--point-light);
        `}
      >
        <MdKeyboardArrowUp
          css={css`
            width: 100%;
            height: 100%;
            color: var(--point-dark);
          `}
        />
      </Button>
    </div>
  );
};

export default About;
