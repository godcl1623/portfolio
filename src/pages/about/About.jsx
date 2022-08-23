import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { MdKeyboardArrowUp } from 'react-icons/md';

import Common from 'components/utils/Common';
import GenerateSection from 'components/utils/GenerateSection';
import GenerateContent from 'pages/about/subcomps/GenerateContent';

import { setIsChanged } from 'slices';

import { selfInfo, introduction, skills } from 'assets/db/aboutData';
import { debouncer } from 'utils/customfunctions';
import { isFrontBiggerThanBack } from 'utils/capsuledConditions';
import { Button } from 'styles/elementsPreset';

import { AboutStyle, topButtonStyle, topButtonIconStyle } from './style/aboutStyle';

const Capable = <GenerateSection data={skills} />;
const childContent = (
  <>
    <GenerateContent object={selfInfo} />
    <GenerateSection data={introduction} />
    <GenerateSection sub={Capable} />
  </>
);

function About() {
  const changeStatus = useSelector(({ sliceReducers }) => sliceReducers.isChangeDetected);

  const dispatch = useDispatch();

  const aboutRef = React.useRef();
  const topButtonRef = React.useRef();

  const debouncedScrollHandler = event => {
    debouncer(btnHandler());
  };

  const btnHandler = () => {
    const topButton = topButtonRef.current;
    const about = aboutRef.current;
    const displayPoint = aboutRef.current.querySelector('.area-header');
    if (isFrontBiggerThanBack(about.scrollTop > displayPoint.offsetTop)) {
      topButton.style.display = 'block';
      topButton.style.opacity = '70%';
    } else {
      topButton.style.display = 'none';
    }
  };

  const scrollToTop = () => {
    aboutRef.current.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  React.useEffect(() => {
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
      <Button className="to-top" ref={topButtonRef} onClick={scrollToTop} css={topButtonStyle}>
        <MdKeyboardArrowUp css={topButtonIconStyle} />
      </Button>
    </>
  );
}

export default About;
