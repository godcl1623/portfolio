/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */

import { updateNextProjectState } from '../../common/customfunctions';

import * as carouselStyles from './style/carouselStyle';

function setClientSizes(originalState, setState, newState) {
  setState({
    ...originalState,
    height: newState.height,
    left: newState.left,
    width: newState.width
  });
}

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
  const carouselTimer = useRef();
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

  useEffect(() => {
    if (selectedProjectIdx) {
      if (selectedProjectIdx > dataLength - 3) {
        setTimeout(() => {
          dispatch(setProjectIdx(0));
          setFlag(true);
        }, 300);
      } else if (selectedProjectIdx < 0) {
        setTimeout(() => {
          dispatch(setProjectIdx(dataLength - 3));
          setFlag(true);
        }, 300);
      }
    } else if (carouselItemIdx > dataLength - 3) {
      setTimeout(() => {
        setItemIdx(0);
        setFlag(true);
      }, 300);
    } else if (carouselItemIdx < 0) {
      setTimeout(() => {
        setItemIdx(dataLength - 3);
        setFlag(true);
      }, 300);
    }
  }, [selectedProjectIdx, carouselItemIdx]);

  useEffect(() => {
    if (flag) {
      setTimeout(() => setFlag(false), 100);
    }
  }, [flag]);

  useEffect(() => {
    if (modalState) {
      if (mode === 'timer' && dataLength - 2 > 1) {
        carouselTimer.current = setInterval(() => {
          if (selectedProjectIdx != null) {
            dispatch(setProjectIdx(selectedProjectIdx + 1));
            setTimerFlag(!!initializeTimerFlag);
          } else {
            setItemIdx(prevVal => prevVal + 1);
            setTimerFlag(!!initializeTimerFlag);
          }
        }, timer * 1000 || 3000);
      }
    }
    return () => {
      clearInterval(carouselTimer.current);
      carouselTimer.current = undefined;
    };
  }, [mode, modalState, selectedProjectIdx]);

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
      if (isABiggerThanB(Math.abs(xMovedDist), Math.abs(yMovedDist))) {
        if (isABiggerThanB(xMovedDist, 0)) {
          updateNextProjectState('▶', dispatch, setProjectIdx, selectedProjectIdx);
        } else if (isABiggerThanB(xMovedDist, 0, true)) {
          updateNextProjectState('◀', dispatch, setProjectIdx, selectedProjectIdx);
        }
      }
    }
  }

  const isABiggerThanB = (a, b, negative = false) => {
    if (negative) {
      return a < b;
    }
    return a > b;
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
