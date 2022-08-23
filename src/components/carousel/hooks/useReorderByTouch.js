import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProjectIndex } from 'slices';
import { updateProjectState } from 'utils/customfunctions';
import { isFrontBiggerThanBack, isEqual, isFrontSmallerThanBack } from 'utils/capsuledConditions';

const useReorderByTouch = () => {
  const selectedProjectIndex = useSelector(({ sliceReducers }) => sliceReducers.selectedProjectIndex);
  const [startX, setStartX] = React.useState('');
  const [endX, setEndX] = React.useState('');
  const [startY, setStartY] = React.useState('');
  const [endY, setEndY] = React.useState('');

  const dispatch = useDispatch();

  function touchMovementHandler(event) {
    if (isEqual(event.type, 'touchstart')) {
      setStartCoordinates(event);
    } else {
      setEndCoordinates(event);
    }
  }

  const setStartCoordinates = event => {
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  };

  const setEndCoordinates = event => {
    setEndX(event.touches[0].clientX);
    setEndY(event.touches[0].clientY);
  };

  const xMovedDistance = startX - endX;
  const yMovedDistance = startY - endY;

  function touchEndHandler(event) {
    if (isFrontBiggerThanBack(Math.abs(xMovedDistance), Math.abs(yMovedDistance))) {
      const updateProjectIndex = newIndex => dispatch(setProjectIndex(newIndex));
      if (isFrontBiggerThanBack(xMovedDistance, 0)) {
        updateProjectState(updateProjectIndex, '▶', selectedProjectIndex);
      } else if (isFrontSmallerThanBack(xMovedDistance, 0)) {
        updateProjectState(updateProjectIndex, '◀', selectedProjectIndex);
      }
    }
  }

  return { touchMovementHandler, touchEndHandler };
};

export default useReorderByTouch;
