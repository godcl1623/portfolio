import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BodySection from './layouts/BodySection';
import projectsData from '../../../db/projectsData';
import { slideStartPoint } from '../../../modules/customfunctions';
import { isReadyToMoveCreator, isChangingProjectCreator } from '../../../actions';

const Projects = () => {
  const modalState = useSelector(state => state.modalState);
  const changedValue = useSelector(state => state.isChangingProject);
  const selectedProject = useSelector(state => state.selectedProject);
  const readyToMove = useSelector(state => state.isReadyToMove);
  const dispatch = useDispatch();

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

  // const [startX, setStartX] = React.useState('');
  // const [endX, setEndX] = React.useState('');
  // const [startY, setStartY] = React.useState('');
  // const [endY, setEndY] = React.useState('');
  // const xVal = startX - endX;
  // const yVal = startY - endY;

  // useEffect(() => {
  //   const fee = document.querySelector('.Projects');
  //   fee.addEventListener('touchstart', e => {
  //     setStartX(e.changedTouches['0'].screenX);
  //     setStartY(e.changedTouches['0'].screenY);
  //   }, false);
  //   fee.addEventListener('touchend', e => {
  //     setEndX(e.changedTouches['0'].screenX);
  //     setEndY(e.changedTouches['0'].screenY);
  //   }, false);
  //   console.log(xVal, yVal)
  //   if (xVal > yVal) {
  //     fee.addEventListener('touchmove', e => {
  //       e.preventDefault();
  //     }, false);
  //     if (xVal > 0) {
  //       dispatch(isChangingProjectCreator(changedValue-100));
  //     } else {
  //       dispatch(isChangingProjectCreator(changedValue+100));
  //     }
  //   } else {
  //     fee.addEventListener('touchmove', e => {
  //       console.log('foo')
  //     }, false);
  //   }
  // }, [xVal, yVal]);

  const { headers } = projectsData;

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
        left: ${slideStartPoint(headers) + changedValue}%;
      `}
    >
      { Bodies(projectsData) }
    </div>
  );
};

export default Projects;