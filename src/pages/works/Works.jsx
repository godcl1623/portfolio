/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */

import { setModalState, setIsChanged, setProjectIndex } from 'slices';

import projectsData from 'assets/db/projectsData';

import Common from 'components/utils/Common';
import Modal from 'components/modal/Modal';
import GenerateSection from 'components/utils/GenerateSection';
import PageButton from 'components/projectDetails/PageButton';
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
    dispatch(setProjectIndex(subject.indexOf(event.target.dataset.project)));
  };

  const projects = {
    subject,
    header: '',
    content: '',
    setState: event => updateStates(event),
    icon
  };

  const pageButtons = ['left', 'right'].map((direction, index) => (
    <PageButton direction={direction} key={`${direction}_${index}`} />
  ));

  React.useEffect(() => {
    const disableOpacity = setTimeout(() => dispatch(setIsChanged(false)), 100);
    return () => clearTimeout(disableOpacity);
  }, []);

  return (
    <div className="Works" css={workStyle(changeStatus)}>
      <Common
        heading="WORKS"
        passed={
          <GenerateSection data={projects} parentsHeader="WORKS" />
        }
      />
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(setModalState(boolean))}
        buttons={pageButtons}
        componentInDisplay={
          <ManualCarousel
            dataLength={processedData.length}
            displayTarget={
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
