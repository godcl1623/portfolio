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
  const changeStatus = useSelector(({ sliceReducers }) => 
    sliceReducers.isChangeDetected);

  const dispatch = useDispatch();

  const aboutRef = useRef();
  const topBtnRef = useRef();

  const debouncedScrollHandler = event => {
    debouncer(btnHandler());
  };

  const btnHandler = () => {
    const topBtn = topBtnRef.current;
    const about = aboutRef.current;
    const displayPoint = aboutRef.current.querySelector('.area-header');
    if (compareTwoValues(about.scrollTop > displayPoint.offsetTop)) {
      topBtn.style.display = 'block';
      topBtn.style.opacity = '70%';
    } else {
      topBtn.style.display = 'none';
    }
  };

  const compareTwoValues = (front, back) => front > back;

    const scrollToTop = () => {
      aboutRef.current.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    };

  useEffect(() => {
    const disableOpacity = setTimeout(() => dispatch(setIsChanged(false)), 100);
    return () => clearTimeout(disableOpacity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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



