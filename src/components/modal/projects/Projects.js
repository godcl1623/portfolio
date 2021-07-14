import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BodySection from './layouts/BodySection';
import projectsData from '../../../db/projectsData';
import { slideStartPoint } from '../../../modules/customfunctions';
import { isReadyToMoveCreator, isChangingProjectCreator, selectedProjectCreator } from '../../../actions';

const Projects = () => {
  const modalState = useSelector(state => state.modalState);
  const changeState = useSelector(state => state.isChangingProject);
  const selectedProject = useSelector(state => state.selectedProject);
  const readyToMove = useSelector(state => state.isReadyToMove);
  const list = useSelector(state => state.projectsList);
  const dispatch = useDispatch();
  const { headers } = projectsData;

  const maxChangeValue = slideStartPoint(headers);

  useEffect(() => {
    const makeReady = setTimeout(() => dispatch(isReadyToMoveCreator(false)), 300);
    return () => clearTimeout(makeReady);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyToMove]);

  useEffect(() => {
    const foo = document.querySelector('.Projects').childNodes;
    foo.forEach(bar => {
      setTimeout(() => {
        bar.scrollTop = 0;
      }, 300);
    });
  }, [selectedProject]);

  // 여기부터 임시
  const updateNextProjectState = btnText => {
    const projectText = selectedProject.split(' ')[0];
    let projectNumber = Number(selectedProject.split(' ')[1]);
    projectNumber = btnText === '▶' ? projectNumber + 1 : projectNumber - 1;
    if (projectNumber <= 0) {
      projectNumber = list.length;
    } else if (projectNumber > list.length) {
      projectNumber = 1;
    }
    const test = [projectText, projectNumber].join(' ');
    dispatch(selectedProjectCreator(test));
  };

  const changeActualProject = btnText => {
    const foo = document.querySelector('.Projects');
    foo.style.transition = 'all 0.4s';
    if (btnText === '▶') {
      if (-changeState === maxChangeValue * 2) {
        dispatch(isChangingProjectCreator(changeState-100));
        dispatch(isReadyToMoveCreator(true));
        setTimeout(() => {
          foo.style.transition = ''
          dispatch(isChangingProjectCreator(0));
        }, 400);
      } else {
        dispatch(isChangingProjectCreator(changeState-100));
      }
    } else if (btnText === '◀') {
      if (changeState === 0) {
        dispatch(isChangingProjectCreator(changeState+100));
        dispatch(isReadyToMoveCreator(true));
        setTimeout(() => {
          foo.style.transition = '';
          dispatch(isChangingProjectCreator(-maxChangeValue * 2));
        }, 400);
      } else {
        dispatch(isChangingProjectCreator(changeState+100));
      }
    }
  };
  // 여기까지 임시

  const [startX, setStartX] = React.useState('');
  const [endX, setEndX] = React.useState('');
  const [startY, setStartY] = React.useState('');
  const [endY, setEndY] = React.useState('');

  useEffect(() => {
    const fee = document.querySelector('.Projects');
    fee.style.transition = 'all 0.4s';

    const dragStart = event => {
      event.preventDefault();
      setStartX(event.touches[0].clientX);
      setStartY(event.touches[0].clientY);
    }

    const dragAction = event => {
      setEndX(event.touches[0].clientX);
      setEndY(event.touches[0].clientY);
    }

    const dragEnd = event => {
      const diffX = startX - endX;
      const diffY = startY - endY;
      const absDiffX = Math.abs(diffX);
      const absDiffY = Math.abs(diffY);
      // console.log(typeof diffX, typeof diffY, typeof absDiffX, typeof absDiffY);
      // console.log(Math.abs(startX - endX), Math.abs(startY - endY));
      // console.log(startY - endY);
      /* ******************** 로직 본체 ******************** */
      if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
        // dispatch(isChangingProjectCreator(changeState-100));
        if (startX - endX > 0) {
          updateNextProjectState('▶');
          if (-changeState === maxChangeValue * 2) {
            dispatch(isChangingProjectCreator(changeState-100));
            dispatch(isReadyToMoveCreator(true));
            setTimeout(() => {
              fee.style.transition = ''
              dispatch(isChangingProjectCreator(0));
              console.log('초기화')
            }, 400);
          } else {
            dispatch(isChangingProjectCreator(changeState-100));
            console.log('이동')
          }
          // console.log('오른쪽');
        } else if (startX - endX < 0) {
          // if (changeState === 0) {
          //   dispatch(isChangingProjectCreator(changeState+100));
          //   dispatch(isReadyToMoveCreator(true));
          //   setTimeout(() => {
          //     fee.style.transition = '';
          //     dispatch(isChangingProjectCreator(-maxChangeValue * 2));
          //   }, 400);
          // } else {
          //   dispatch(isChangingProjectCreator(changeState+100));
          // }
        }
        // console.log('foo');
      } else if (Math.abs(startX - endX) < Math.abs(startY - endY)) {
        if (startY - endY > 0) {
          console.log('아래쪽');
        } else if (startY - endY < 0) {
          console.log('위쪽');
        }
      }
    }
      fee.addEventListener('touchstart', dragStart);
      fee.addEventListener('touchmove', dragAction);
      fee.addEventListener('touchend', dragEnd);
  }, [endX, endY]);

  const Bodies = data => {
    const test = [];
    const { images, icons, comments } = data;
    headers.forEach((header, index) => {
      test.push(
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
    const foo = <BodySection
      key={`cloned ${headers.length - 1}`}
      header={headers[headers.length - 1]}
      images={images[headers[headers.length - 1]]}
      icons={icons[headers[headers.length - 1]]}
      comments={comments[headers.length - 1]}
      className={`Cloned`}
    />;
    const bar = <BodySection
      key={`cloned 1`}
      header={headers[0]}
      images={images[headers[0]]}
      icons={icons[headers[0]]}
      comments={comments[0]}
      className={`Cloned`}
    />;
    const test2 = [foo, ...test, bar];
    return test2;
  };

  return (
    <div className="Projects"
      css={css`
        display: flex;
        width: ${100 * (headers.length + 2)}%;
        height: 100%;
        justify-content: center;
        align-items: center;
        opacity: ${modalState ? '100%' : '0'};
        // transition: ${readyToMove ? '' : 'all 0.4s'};
        // transition: all 0.4s;
        position: relative;
        left: ${slideStartPoint(headers) + changeState}%;
      `}
    >
      { Bodies(projectsData) }
    </div>
  );
};

export default Projects;