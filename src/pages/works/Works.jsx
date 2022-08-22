/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */

import { setModalState, setIsChanged, setProjectIdx } from 'slices';

import projectsData from 'assets/db/projectsData';

import Common from 'components/utils/Common';
import Modal from 'components/modal/Modal';
import GenSection from 'components/utils/GenSection';
import PageBtn from 'components/projectDetails/PageBtn';
import PageIndicator from 'components/projectDetails/PageIndicator';
import ManualCarousel from 'components/carousel/ManualCarousel';
import CarouselItems from 'components/carousel/subComponents/CarouselItems';

import workStyle from './style/worksStyle';

const Works = () => {
  const modalState = useSelector(({ sliceReducers }) => sliceReducers.modalState);
  const changeStatus = useSelector(({ sliceReducers }) => sliceReducers.isChangeDetected);

  const dispatch = useDispatch();

  const { preview: icon, headers: subject } = projectsData;
  const processedData = [subject[subject.length - 1], ...subject, subject[0]];

  const updateStates = event => {
    dispatch(setModalState(true));
    dispatch(setProjectIdx(subject.indexOf(event.target.dataset.project)));
  };

  const projects = {
    subject,
    header: '',
    content: '',
    setState: event => updateStates(event),
    icon
  };

  const btns = ['left', 'right'].map((direction, index) => (
    <PageBtn direction={direction} key={`${direction}_${index}`} />
  ));

  useEffect(() => {
    const disableOpacity = setTimeout(() => dispatch(setIsChanged(false)), 100);
    return () => clearTimeout(disableOpacity);
  }, []);

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
        indicator={<PageIndicator data={subject} />}
      />
    </div>
  );
};

export default Works;
