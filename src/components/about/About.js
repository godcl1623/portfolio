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

const btnHandler = () => {
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

const articleHandler = (event, display) => {
  const about = document.querySelector('.About');
  const common = document.querySelector('.Common');
  const intros = document.querySelectorAll('.paragraphs-container');
  intros.forEach((intro, i) => {
    if (intro === intros[0] || intro === intros[1]) return;
    const viewBottom = about.scrollTop + about.offsetHeight * 99 / 100;
    const displayingPoint = intro.parentNode.offsetTop + intro.parentNode.offsetHeight / 2
    if (common.offsetHeight > window.innerHeight) {
      if ( viewBottom >= displayingPoint) {
        intro.parentNode.style.opacity = '100%';
        intro.parentNode.style.left = '0';
      } else if (i % 2 === 0) {
        intro.parentNode.style.opacity = '0';
        intro.parentNode.style.left = '-150px';
      } else {
        intro.parentNode.style.opacity = '0';
        intro.parentNode.style.left = '150px';
      }
      if (about.scrollTop >= displayingPoint) {
        if (i % 2 === 0) {
          intro.parentNode.style.opacity = '0';
          intro.parentNode.style.left = '-150px';
        } else {
          intro.parentNode.style.opacity = '0';
          intro.parentNode.style.left = '150px';
        }
      }
    }
    if (common.offsetHeight <= window.innerHeight) {
      intro.parentNode.style.opacity = '100%';
      intro.parentNode.style.left = '0';
    }
  });
};

const debouncedScrollHandler = e => {
  debouncer(btnHandler());
  debouncer(articleHandler(e));
}

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
    return () => clearTimeout(disableOpacity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const intros = document.querySelectorAll('.paragraphs-container');
    intros.forEach((intro, i) => {
      if (intro === intros[0] || intro === intros[1]) return;
      intro.parentNode.style.position = 'relative';
      intro.parentNode.style.opacity = '0';
      if (i % 2 === 0) {
        intro.parentNode.style.left = '-150px';
      } else {
        intro.parentNode.style.left = '150px';
      }
    });
  }, []);

  useEffect(() => {
    const common = document.querySelector('.Common');
    const intros = document.querySelectorAll('.paragraphs-container');
    const revealer = () => intros.forEach((intro, i) => {
      if (window.matchMedia('(orientation: portrait)').matches) {
        intro.parentNode.style.opacity = '100%';
        intro.parentNode.style.left = '0';
      }
    });
    if (common.offsetHeight <= window.innerHeight) {
      revealer();
    }
    window.addEventListener('resize', revealer);
    return () => window.removeEventListener('resize', revealer);
  }, []);

  return (
    <>
      <div
        className="About"
        onScroll={e => debouncedScrollHandler(e)}
        css={css`
          margin: 30px auto;
          border: none;
          border-radius: 10px;
          box-shadow: 0 0 10px 10px var(--box-shadow);
          ${flex.vertical}
          justify-content: space-between;
          width: var(--background-width);
          max-width: 1920px;
          height: 100%;
          background-color: var(--white);
          opacity: ${changeStatus ? '0' : '100%'};
          transition: all 0.5s;
          overflow-x: hidden;
          @media (orientation: portrait) {
            height: max-content;
          }

          @media (max-width: 1023px) and (orientation: landscape) {
            margin: 0;
          }

          *:not(.to-top) {
            opacity: ${changeStatus ? '0' : '100%'};
            transition: all 0.5s;
          }
        `}
      >
        <Common heading="ABOUT" passed={childContent} />
      </div>
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
    </>
  );
};

export default About;
