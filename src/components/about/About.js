/* ***** Dependencies ***** */
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdKeyboardArrowUp } from 'react-icons/md';
// components
import Common from '../utils/Common';
import GenContent from '../utils/GenContent';
import GenSection from '../utils/GenSection';
// action creators
import { setSelectedMenu, setIsChanged } from '../../slices';
// modules
import { selfInfo, introduction, skills } from '../../db/aboutData';
import { debouncer } from '../../modules/customfunctions';
import { Button } from '../../styles/elementsPreset';
import { flex } from '../../styles/presets';

/* ***** Component-specific Functions ***** */
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

const articleHandler = () => {
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
        intro.parentNode.style.transform = 'translateX(0)';
      } else if (i % 2 === 0) {
        intro.parentNode.style.opacity = '0';
        intro.parentNode.style.transform = 'translateX(-9.375rem)';
      } else {
        intro.parentNode.style.opacity = '0';
        intro.parentNode.style.transform = 'translateX(9.375rem)';
      }
      if (about.scrollTop >= displayingPoint) {
        if (i % 2 === 0) {
          intro.parentNode.style.opacity = '0';
          intro.parentNode.style.transform = 'translateX(-9.375rem)';
        } else {
          intro.parentNode.style.opacity = '0';
          intro.parentNode.style.transform = 'translateX(9.375rem)';
        }
      }
    }
  });
};

const debouncedScrollHandler = e => {
  debouncer(btnHandler());
  debouncer(articleHandler(e));
}

// props
const Capable = <GenSection data={skills}/>
const childContent = (
  <React.Fragment>
    <GenContent object={selfInfo} />
    <GenSection data={introduction} />
    <GenSection sub={Capable} />
  </React.Fragment>
);

/* ***** Component Body ***** */
const About = () => {
  /* Init Hooks */
  // States
  const changeStatus = useSelector(state => state.sliceReducers.isChangeDetected);
  // redux - dispatch
  const dispatch = useDispatch();

  // Init Animations
  useEffect(() => {
    dispatch(setSelectedMenu(''));
    const disableOpacity = setTimeout(() => dispatch(setIsChanged(false)), 100);
    return () => clearTimeout(disableOpacity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Init Scrolls
  useEffect(() => {
    const intros = document.querySelectorAll('.paragraphs-container');
    intros.forEach((intro, i) => {
      if (intro === intros[0] || intro === intros[1]) return;
      intro.parentNode.style.position = 'relative';
      intro.parentNode.style.opacity = '0';
      if (i % 2 === 0) {
        intro.parentNode.style.transform = 'translateX(-9.375rem)';
      } else {
        intro.parentNode.style.transform = 'translateX(9.375rem)';
      }
    });
  }, []);

  // Detecting Screen Resolution
  useEffect(() => {
    const intros = document.querySelectorAll('.paragraphs-container');
    const revealer = () => intros.forEach(intro => {
      if (window.matchMedia('(orientation: portrait)').matches) {
        intro.parentNode.style.opacity = '100%';
        intro.parentNode.style.transform = 'translateX(0)';
      }
    });
    window.addEventListener('resize', revealer);
    return () => window.removeEventListener('resize', revealer);
  }, []);

  return (
    <>
      <div
        className="About"
        onScroll={e => debouncedScrollHandler(e)}
        css={css`
          margin: 1.875rem auto;
          border: none;
          border-radius: 0.625rem;
          -webkit-box-shadow: 0 0 0.625rem 0.625rem var(--box-shadow);
                  box-shadow: 0 0 0.625rem 0.625rem var(--box-shadow);
          ${flex.vertical}
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
                  justify-content: space-between;
          width: var(--background-width);
          max-width: 1920px;
          height: 100%;
          background-color: var(--white);
          opacity: ${changeStatus ? '0' : '100%'};
          -webkit-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          overflow-y: scroll;
          @media (orientation: portrait) {
            height: -webkit-max-content;
            height: -moz-max-content;
            height: max-content;
          }

          @media (max-width: 1023px) and (orientation: landscape) {
            margin: 0;
          }

          *:not(.to-top) {
            opacity: ${changeStatus ? '0' : '100%'};
            -webkit-transition: all 0.5s;
            -o-transition: all 0.5s;
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
          min-width: 1.875rem;
          min-height: 1.875rem;
          width: 2vw;
          height: 2vw;
          position: fixed;
          bottom: 2.188rem;
          -webkit-transition: opacity 0.3s;
          -o-transition: opacity 0.3s;
          transition: opacity 0.3s;
          opacity: 0;
          background: var(--point-light);
          @media (max-width: 1023px) and (orientation: landscape) {
            bottom: 0.438rem;
          }
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
