/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */

import { updateProjectState } from 'utils/customfunctions';

import { isFrontBiggerThanBack, isFrontSmallerThanBack, isNull } from 'utils/capsuledConditions';
import { DEFAULT_DELAY_TIME } from 'utils/constants';

import * as carouselStyles from './style/carouselStyle';

export default function Carousel({ dataLength, displayTgt, mode, options }) {
  const [carouselClientSizes, setCarouselClientSizes] = useState();
  const [carouselItemIdx, setItemIdx] = useState(0);
  const [flag, setFlag] = useState(false);
  const [initializeTimerFlag, setTimerFlag] = useState(true);
  const [startX, setStartX] = useState('');
  const [endX, setEndX] = useState('');
  const [startY, setStartY] = useState('');
  const [endY, setEndY] = useState('');
  const carouselCnt = useRef(null);
  const carouselConveyor = useRef(null);
  const localOptions = options || {};
  const { modalState, dispatch, selectedProjectIdx, setProjectIdx, customSizes, timer } =
    localOptions;
  const itemIdx = selectedProjectIdx || carouselItemIdx;

  useEffect(() => {
    if (carouselCnt.current) {
      const newState = {
        height: carouselCnt.current.clientHeight,
        left: carouselCnt.current.offsetLeft,
        width: carouselCnt.current.clientWidth
      };
      setClientSizes(carouselClientSizes, setCarouselClientSizes, newState);
    }
  }, [carouselCnt.current]);

  const setClientSizes = (originalState, newState) => {
    setCarouselClientSizes({
      ...originalState,
      height: newState.height,
      left: newState.left,
      width: newState.width
    });
  };

  useEffect(() => {
    let reorderTimeout = 0;
    if (selectedProjectIdx) {
      if (isFrontBiggerThanBack(selectedProjectIdx, dataLength - 3)) {
        reorderTimeout = setCarouselOrder(dispatchTo, 0);
      } else if (isFrontSmallerThanBack(selectedProjectIdx, 0)) {
        reorderTimeout = setCarouselOrder(dispatchTo, dataLength - 3);
      }
    } else if (isFrontBiggerThanBack(carouselItemIdx, dataLength - 3)) {
      reorderTimeout = setCarouselOrder(setItemIdx, 0);
    } else if (isFrontSmallerThanBack(carouselItemIdx, 0)) {
      reorderTimeout = setCarouselOrder(setItemIdx, dataLength - 3);
    }
    return () => clearTimeout(reorderTimeout);
  }, [selectedProjectIdx, carouselItemIdx]);

  const setCarouselOrder = (reorderFunc, carouselIndex) =>
    setTimeout(() => {
      reorderFunc(carouselIndex);
      setFlag(true);
    }, DEFAULT_DELAY_TIME);

  const dispatchTo = carouselIndex => dispatch(setProjectIdx(carouselIndex));

  useEffect(() => {
    if (flag) {
      setTimeout(() => setFlag(false), DEFAULT_DELAY_TIME / 3);
    }
  }, [flag]);

  useEffect(() => {
    let intervalTimer = 0;
    if (modalState) {
      const isModeTimer = isValueEqual(mode, 'timer');
      const isFrontBig = isFrontBiggerThanBack(dataLength - 2, 1);
      if (isBothConditionTrue(isModeTimer, isFrontBig)) {
        intervalTimer = setInterval(() => {
          if (!isNull(selectedProjectIdx)) {
            dispatch(setProjectIdx(selectedProjectIdx + 1));
            setTimerFlag(!!initializeTimerFlag);
          } else {
            setItemIdx(prevVal => prevVal + 1);
            setTimerFlag(!!initializeTimerFlag);
          }
        }, ((timer * DEFAULT_DELAY_TIME) / 3) * 10 || DEFAULT_DELAY_TIME * 10);
      }
    }
    return () => clearInterval(intervalTimer);
  }, [mode, modalState, selectedProjectIdx]);

  const isBothConditionTrue = (a, b) => a && b;

  useEffect(() => {
    if (modalState) {
      if (initializeTimerFlag) {
        setTimeout(() => setTimerFlag(!initializeTimerFlag), timer * 1000 - 50 || 2950);
      }
    }
  }, [initializeTimerFlag, modalState]);

  function touchMovementHandler(event) {
    if (!isValueEqual(mode, 'timer')) {
      if (isValueEqual(event.type, 'touchstart')) {
        setStartCoords(event);
      } else {
        setEndCoords(event);
      }
    }
  }

  const isValueEqual = (value, compareTgt) => value === compareTgt;

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
    if (!isValueEqual(mode, 'timer')) {
      if (isFrontBiggerThanBack(Math.abs(xMovedDist), Math.abs(yMovedDist))) {
        const updateProjectIndex = newIndex => dispatch(setProjectIdx(newIndex));
        if (isFrontBiggerThanBack(xMovedDist, 0)) {
          updateProjectState(updateProjectIndex, '▶', selectedProjectIdx);
        } else if (isFrontSmallerThanBack(xMovedDist, 0)) {
          updateProjectState(updateProjectIndex, '◀', selectedProjectIdx);
        }
      }
    }
  }

  return (
    <>
      <div
        id="carousel_container"
        ref={carouselCnt}
        css={carouselCntStyle(customSizes, carouselCnt)}
        onTouchStart={touchMovementHandler}
        onTouchMove={touchMovementHandler}
        onTouchEnd={touchEndHandler}
      >
        <div
          id="carousel_conveyor"
          ref={carouselConveyor}
          css={carouselConveyorStyle(dataLength, carouselClientSizes, itemIdx, flag)}
        >
          {displayTgt}
        </div>
        {mode === 'timer' ? (
          <div
            id="carousel_progress_bar"
            css={progressBarStyle(modalState, dataLength, initializeTimerFlag, timer)}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
}

const { carouselCntStyle, carouselConveyorStyle, progressBarStyle } = carouselStyles;
