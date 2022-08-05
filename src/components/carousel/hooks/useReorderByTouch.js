import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProjectIdx } from 'slices';
import { updateProjectState } from 'utils/customfunctions';
import { isFrontBiggerThanBack, isEqual, isFrontSmallerThanBack } from 'utils/capsuledConditions';

const useReorderByTouch = () => {
  const selectedProjectIdx = useSelector(({ sliceReducers }) => sliceReducers.selectedProjectIdx);
  const [startX, setStartX] = React.useState('');
  const [endX, setEndX] = React.useState('');
  const [startY, setStartY] = React.useState('');
  const [endY, setEndY] = React.useState('');

  const dispatch = useDispatch();

  function touchMovementHandler(event) {
    if (isEqual(event.type, 'touchstart')) {
      setStartCoords(event);
    } else {
      setEndCoords(event);
    }
  }

  const setStartCoords = event => {
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  };

  const setEndCoords = event => {
    setEndX(event.touches[0].clientX);
    setEndY(event.touches[0].clientY);
  };

  const xMovedDist = startX - endX;
  const yMovedDist = startY - endY;

  function touchEndHandler(event) {
    if (isFrontBiggerThanBack(Math.abs(xMovedDist), Math.abs(yMovedDist))) {
      const updateProjectIndex = newIndex => dispatch(setProjectIdx(newIndex));
      if (isFrontBiggerThanBack(xMovedDist, 0)) {
        updateProjectState(updateProjectIndex, '▶', selectedProjectIdx);
      } else if (isFrontSmallerThanBack(xMovedDist, 0)) {
        updateProjectState(updateProjectIndex, '◀', selectedProjectIdx);
      }
    }
  }

  return { touchMovementHandler, touchEndHandler };
};

export default useReorderByTouch;
