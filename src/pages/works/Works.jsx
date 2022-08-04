/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Common from 'components/utils/Common';
import Modal from 'components/modal/Modal';
import GenSection from 'components/utils/GenSection';
import PageBtn from 'components/modal/projects/layouts/PageBtn';
import PageIndicator from 'components/modal/projects/layouts/PageIndicator';
import Carousel from 'components/utils/Carousel';
import CarouselItems from 'pages/works/subcomps/CarouselItems';

import { setModalState, setIsChanged, setProjectIdx } from 'slices';

import projectsData from 'db/projectsData';
import { flex } from 'styles/presets';

const Works = () => {
  const modalState = useSelector(({ sliceReducers }) => sliceReducers.modalState);
  const changeStatus = useSelector(({ sliceReducers }) => sliceReducers.isChangeDetected);
  const selectedProjectIdx = useSelector(({ sliceReducers }) => sliceReducers.selectedProjectIdx);

  const dispatch = useDispatch();

  const container = useRef();

  const { preview: icon, headers: subject } = projectsData;
  const processedData = [subject[subject.length - 1], ...subject, subject[0]];

  const updateStates = event => {
    dispatch(setModalState(true));
    dispatch(setProjectIdx(subject.indexOf(event.target.dataset.project)));
  };

  useEffect(() => {
    const disableOpacity = setTimeout(() => dispatch(setIsChanged(false)), 100);
    return () => clearTimeout(disableOpacity);
  }, []);

  const projects = {
    subject,
    header: '',
    content: '',
    setState: e => updateStates(e),
    icon
  };

  const btns = ['left', 'right'].map((direction, index) => (
    <PageBtn direction={direction} forRef={container} key={index} />
  ));

  return (
    <div className="Works" css={workStyle(changeStatus)}>
      <Common
        heading="WORKS"
        passed={
          <GenSection data={projects} parentsHeader="WORKS" />
        }
      />
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(setModalState(boolean))}
        buttons={btns}
        componentInDisplay={
          <Carousel
            dataLength={processedData.length}
            displayTgt={
              <CarouselItems processedData={processedData} projectsData={projectsData} />
            }
            options={{
              modalState,
              dispatch,
              selectedProjectIdx,
              setProjectIdx
            }}
          />
        }
        indicator={<PageIndicator data={subject} forRef={container} />}
        forRef={container}
      />
    </div>
  );
};

export default Works;

const workStyle = changeStatus => css`
  margin: 1.875rem auto;
  border-radius: 0.625rem;
  box-shadow: 0 0 0.625rem 0.625rem rgba(0, 0, 0, 0.3);
  ${flex.vertical}
  width: var(--background-width);
  max-width: 1920px;
  height: 100%;
  background-color: white;
  opacity: ${changeStatus ? '0' : '100%'};
  transition: all 0.3s;
  overflow: hidden;
  @media (orientation: portrait) and (min-width: 600px) {
    height: max-content;
  }
  @media (orientation: landscape) and (max-width: 1023px) {
    margin: 0;
  }
`;
