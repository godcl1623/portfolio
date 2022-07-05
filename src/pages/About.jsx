import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdKeyboardArrowUp } from 'react-icons/md';

import Common from '../components/utils/Common';
import GenContent from '../components/utils/GenContent';
import GenSection from '../components/utils/GenSection';

import { setIsChanged } from '../slices';

import { selfInfo, introduction, skills } from '../db/aboutData';
import { debouncer } from '../modules/customfunctions';
import { Button } from '../styles/elementsPreset';

import { AboutStyle, topBtnStyle } from '../components/about/Style/aboutStyle';

const Capable = <GenSection data={skills} />;

const childContent = (
  <>
    <GenContent object={selfInfo} />
    <GenSection data={introduction} />
    <GenSection sub={Capable} />
  </>
);

const About = () => {
  const changeStatus = useSelector(({ sliceReducers }) => sliceReducers.isChangeDetected);

  const dispatch = useDispatch();

  const aboutRef = useRef();
  const topBtnRef = useRef();

  const scrollToTop = () => {
    aboutRef.current.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  const debouncedScrollHandler = event => {
    debouncer(btnHandler());
  };

  const btnHandler = () => {
    const topBtn = topBtnRef.current;
    const about = aboutRef.current;
    const displayPoint = aboutRef.current.querySelector('.area-header');
    if (about.scrollTop > displayPoint.offsetTop) {
      topBtn.style.display = 'block';
      topBtn.style.opacity = '70%';
    } else {
      topBtn.style.display = 'none';
    }
  };

  useEffect(() => {
    const disableOpacity = setTimeout(() => dispatch(setIsChanged(false)), 100);
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
        intro.parentNode.style.transform = 'translateX(-9.375rem)';
      } else {
        intro.parentNode.style.transform = 'translateX(9.375rem)';
      }
    });
  }, []);

  useEffect(() => {
    const intros = document.querySelectorAll('.paragraphs-container');
    const revealer = () =>
      intros.forEach(intro => {
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
        ref={aboutRef}
        onScroll={debouncedScrollHandler}
        css={AboutStyle(changeStatus)}
      >
        <Common heading="ABOUT" passed={childContent} />
      </div>
      <Button
        className="to-top"
        ref={topBtnRef}
        onClick={scrollToTop}
        css={topBtnStyle}
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



