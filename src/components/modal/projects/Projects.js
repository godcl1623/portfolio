import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BodySection from './layouts/BodySection';
import projectsData from '../../../db/projectsData';
import { slideStartPoint } from '../../../modules/customfunctions';
import { isReadyToMoveCreator, isChangingProjectCreator, selectedProjectCreator } from '../../../actions';

const Projects = props => {
  const modalState = useSelector(state => state.modalState);
  const changeState = useSelector(state => state.isChangingProject);
  const selectedProject = useSelector(state => state.selectedProject);
  const readyToMove = useSelector(state => state.isReadyToMove);
  const list = useSelector(state => state.projectsList);
  const dispatch = useDispatch();
  const { headers } = projectsData;

  const container = props.forRef;

  const maxChangeValue = slideStartPoint(headers);

  useEffect(() => {
    const makeReady = setTimeout(() => dispatch(isReadyToMoveCreator(false)), 300);
    return () => clearTimeout(makeReady);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyToMove]);

  useEffect(() => {
    const projectsList = document.querySelector('.Projects').childNodes;
    projectsList.forEach(project => {
      setTimeout(() => {
        project.scrollTop = 0;
      }, 300);
    });
  }, [selectedProject]);

  const updateNextProjectState = btnText => {
    const projectText = selectedProject.split(' ')[0];
    let projectNumber = Number(selectedProject.split(' ')[1]);
    projectNumber = btnText === '▶' ? projectNumber + 1 : projectNumber - 1;
    if (projectNumber <= 0) {
      projectNumber = list.length;
    } else if (projectNumber > list.length) {
      projectNumber = 1;
    }
    const updatedText = [projectText, projectNumber].join(' ');
    dispatch(selectedProjectCreator(updatedText));
  };

  useEffect(() => {
    const projectsList = document.querySelector('.Projects');
    if (modalState === false) {
      projectsList.style.transition = '';
    }
  }, [modalState]);

  const changeActualProject = btnText => {
    const projectsList = document.querySelector('.Projects');
    if (btnText === '▶') {
      projectsList.style.transition = 'all 0.4s';
      if (-changeState === maxChangeValue * 2) {
        dispatch(isChangingProjectCreator(changeState-100));
        dispatch(isReadyToMoveCreator(true));
        setTimeout(() => {
          projectsList.style.transition = ''
          dispatch(isChangingProjectCreator(0));
        }, 400);
      } else {
        dispatch(isChangingProjectCreator(changeState-100));
      }
    } else if (btnText === '◀') {
      projectsList.style.transition = 'all 0.4s';
      if (changeState === 0) {
        dispatch(isChangingProjectCreator(changeState+100));
        dispatch(isReadyToMoveCreator(true));
        setTimeout(() => {
          projectsList.style.transition = '';
          dispatch(isChangingProjectCreator(-maxChangeValue * 2));
        }, 400);
      } else {
        dispatch(isChangingProjectCreator(changeState+100));
      }
    }
  };

  const [startX, setStartX] = React.useState('');
  const [endX, setEndX] = React.useState('');
  const [startY, setStartY] = React.useState('');
  const [endY, setEndY] = React.useState('');

  const Bodies = data => {
    const temporaryArray = [];
    const { images, icons, comments } = data;
    headers.forEach((header, index) => {
      temporaryArray.push(
        <BodySection
          key={index + 1}
          header={header}
          images={images[header]}
          icons={icons[header]}
          comments={comments[index]}
          className={`Project${index + 1}`}
        />
      );
    });
    const lastProject = <BodySection
      key={`cloned ${headers.length - 1}`}
      header={headers[headers.length - 1]}
      images={images[headers[headers.length - 1]]}
      icons={icons[headers[headers.length - 1]]}
      comments={comments[headers.length - 1]}
      className={`Cloned`}
    />;
    const firstProject = <BodySection
      key={`cloned 1`}
      header={headers[0]}
      images={images[headers[0]]}
      icons={icons[headers[0]]}
      comments={comments[0]}
      className={`Cloned`}
    />;
    const carousel = [lastProject, ...temporaryArray, firstProject];
    return carousel;
  };

  return (
    <div className="Projects"
      ref={container}
      css={css`
        display: flex;
        width: ${100 * (headers.length + 2)}%;
        height: 100%;
        justify-content: center;
        align-items: center;
        opacity: ${modalState ? '100%' : '0'};
        position: relative;
        // left: ${slideStartPoint(headers) + changeState}%;
        left: ${slideStartPoint(headers)}%;
        transform: translateX(${changeState}px);
      `}
      onTouchStart={e => {
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
      }}
      onTouchMove={e => {
          setEndX(e.touches[0].clientX);
          setEndY(e.touches[0].clientY);
      }}
      onTouchEnd={() => {
        if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
          if (startX - endX > 0) {
            updateNextProjectState('▶');
            changeActualProject('▶');
          } else if (startX - endX < 0) {
            updateNextProjectState('◀');
            changeActualProject('◀');
          }
        }
      }}
    >
      { Bodies(projectsData) }
    </div>
  );
};

export default Projects;