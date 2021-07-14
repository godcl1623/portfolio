import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BodySection from './layouts/BodySection';
import projectsData from '../../../db/projectsData';
import { slideStartPoint, debouncer } from '../../../modules/customfunctions';
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

  const dragStart = event => {
    event.preventDefault();
    setStartX(event.touches[0].pageX);
    setStartY(event.touches[0].pageY);
  }

  const dragAction = event => {
    setEndX(event.touches[0].pageX);
    setEndY(event.touches[0].pageY);
  }

  const dragEnd = event => {
    const diffX = startX - endX;
    const diffY = startY - endY;
    const absDiffX = Math.abs(diffX);
    const absDiffY = Math.abs(diffY);
    const threshold = 100;
    /* ******************** 로직 본체 ******************** */
    console.log(absDiffX, absDiffY);
    if (absDiffX > threshold || absDiffY > threshold) {
      if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
        if (startX - endX > 0) {
          // 문제 1. 지금 이게 모든 터치 이벤트에 대해 발동중 - 명확한 방향 설정 필요할지도
          // 문제 2. 초기화 코드가 계속 호출됨
          // updateNextProjectState('▶');
          // changeActualProject('▶');
          console.log('오른쪽');
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
          console.log('왼쪽')
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
  }

  // useEffect(() => {
  //   const fee = document.querySelector('.Projects');
  //   fee.style.transition = 'all 0.4s';

  //   fee.addEventListener('touchstart', debouncer(dragStart), { passive: false });
  //   fee.addEventListener('touchmove', debouncer(dragAction), { passive: false });
  //   fee.addEventListener('touchend', debouncer(dragEnd), { passive: false });
  // }, [endX, endY]);

  useEffect(() => {
    const fee = document.querySelector('.Projects');
    fee.addEventListener('touchstart', e => e.preventDefault());
    return () => fee.addEventListener('touchstart', e => e.preventDefault());
  }, []);

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
      onTouchStart={e => {
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
      }}
      onTouchMove={e => {
          setEndX(e.touches[0].clientX);
          setEndY(e.touches[0].clientY);
      }}
      onTouchEnd={e => {
        if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
          if (startX - endX > 0) {
            // 문제 1. 지금 이게 모든 터치 이벤트에 대해 발동중 - 명확한 방향 설정 필요할지도
            // 문제 2. 초기화 코드가 계속 호출됨
            // 위 문제들은 useEffect 안쓰고 인라인으로 넣으니까 해결됨
            updateNextProjectState('▶');
            changeActualProject('▶');
          } else if (startX - endX < 0) {
            updateNextProjectState('◀');
            changeActualProject('◀');
          }
        } else if (Math.abs(startX - endX) < Math.abs(startY - endY)) {
          const foo = document.querySelector('.Projects');
          const bar = Array.from(foo.childNodes).find(child => child.classList[0] === selectedProject.split(' ').join(''));
          bar.style.transition = 'all 0.4s';
          if (startY - endY > 0) {
            // bar.scrollTop += (startY - endY);
            bar.scrollTo({
              top: bar.scrollTop + (startY - endY),
              behavior: 'smooth'
            })
            console.log(bar.scrollTop, bar.scrollHeight, startY - endY);
          } else if (startY - endY < 0) {
            // bar.scrollTop += (startY - endY);
            bar.scrollTo({
              top: bar.scrollTop + (startY - endY),
              behavior: 'smooth'
            });
            console.log(bar.scrollTop, bar.scrollHeight, startY - endY);
          }
        }
      }}
    >
      { Bodies(projectsData) }
    </div>
  );
};

export default Projects;