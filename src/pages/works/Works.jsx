/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */

import Common from 'components/utils/Common';
import Modal from 'components/modal/Modal';
import GenSection from 'components/utils/GenSection';
import PageBtn from 'components/projectDetails/PageBtn';
import PageIndicator from 'components/projectDetails/PageIndicator';
import ManualCarousel from 'components/carousel/ManualCarousel';
import CarouselItems from 'components/carousel/subComponents/CarouselItems';

import { setModalState, setIsChanged, setProjectIdx } from 'slices';

import projectsData from 'db/projectsData';

import workStyle from './style/worksStyle';

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
    <PageBtn direction={direction} key={`${direction}_${index}`} />
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
          <ManualCarousel
            dataLength={processedData.length}
            displayTgt={
              <CarouselItems processedData={processedData} projectsData={projectsData} />
            }
          />
        }
        indicator={<PageIndicator data={subject} forRef={container} />}
        forRef={container}
      />
    </div>
  );
};

export default Works;
