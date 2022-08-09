import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { MdKeyboardArrowUp } from 'react-icons/md';

import Common from 'components/utils/Common';
import GenSection from 'components/utils/GenSection';
import GenContent from 'pages/about/subcomps/GenContent';

import { setIsChanged } from 'slices';

import { selfInfo, introduction, skills } from 'assets/db/aboutData';
import { debouncer } from 'utils/customfunctions';
import { isFrontBiggerThanBack } from 'utils/capsuledConditions';
import { Button } from 'styles/elementsPreset';

import { AboutStyle, topBtnStyle, topBtnIconStyle } from './style/aboutStyle';

const Capable = <GenSection data={skills} />;
const childContent = (
  <>
    <GenContent object={selfInfo} />
    <GenSection data={introduction} />
    <GenSection sub={Capable} />
  </>
);

function About() {
  const changeStatus = useSelector(({ sliceReducers }) => sliceReducers.isChangeDetected);

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
    if (isFrontBiggerThanBack(about.scrollTop > displayPoint.offsetTop)) {
      topBtn.style.display = 'block';
      topBtn.style.opacity = '70%';
    } else {
      topBtn.style.display = 'none';
    }
  };

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
      <Button className="to-top" ref={topBtnRef} onClick={scrollToTop} css={topBtnStyle}>
        <MdKeyboardArrowUp css={topBtnIconStyle} />
      </Button>
    </>
  );
}

export default About;
