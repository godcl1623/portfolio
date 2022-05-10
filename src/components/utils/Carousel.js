import React, { useRef, useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { updateNextProjectState } from '../../modules/customfunctions';

function setClientSizes(originalState, setState, newState) {
  setState({
    ...originalState,
    height: newState.height,
    left: newState.left,
    width: newState.width
  });
}

export default function Carousel({ data, mode, options }) {
  const [carouselClientSizes, setCarouselClientSizes] = useState();
  const [carouselItemIdx, setItemIdx] = useState(0);
  const [currProgress, setProgress] = useState(0);
  const [flag, setFlag] = useState(false);
  const [foo, setFoo] = useState(true);
  const [startX, setStartX] = useState('');
  const [endX, setEndX] = useState('');
  const [startY, setStartY] = useState('');
  const [endY, setEndY] = useState('');
  const carouselCnt = useRef(null);
  const carouselTimer = useRef();
  const carouselConveyor = useRef(null);
  // const { modalState, dispatch, selectedProjectIdx, setProjectIdx } = options;
  const localOptions = options || {};
  const { modalState, dispatch, selectedProjectIdx, setProjectIdx, customSizes } = localOptions;
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
      if (selectedProjectIdx > data.length - 3) {
        setTimeout(() => {
          dispatch(setProjectIdx(0));
          setFlag(true);
        }, 300);
      } else if (selectedProjectIdx < 0) {
        setTimeout(() => {
          dispatch(setProjectIdx(data.length - 3));
          setFlag(true);
        }, 300);
      }
    } else if (carouselItemIdx > data.length - 3) {
      setTimeout(() => {
        setItemIdx(0);
        setFlag(true);
      }, 300);
    } else if (carouselItemIdx < 0) {
      setTimeout(() => {
        setItemIdx(data.length - 3);
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
      if (mode === 'timer') {
        carouselTimer.current = setInterval(() => {
          if (selectedProjectIdx != null) {
            dispatch(setProjectIdx(selectedProjectIdx + 1));
            setFoo(true);
          } else {
            setItemIdx(prevVal => prevVal + 1);
          }
        }, 3000);
      }
    }
    return () => {
      clearInterval(carouselTimer.current);
      carouselTimer.current = undefined;
    };
  }, [mode, modalState, selectedProjectIdx]);

  useEffect(() => {
    if (modalState) {
      if (foo) {
        setTimeout(() => setFoo(false), 2950);
      }
    }
  }, [foo, modalState]);

  return (
    <>
      <div
        id="carousel_container"
        ref={carouselCnt}
        style={{
          margin: '0 auto',
          border: '1px solid black',
          width: customSizes ? customSizes.width : '100%',
          height: '100%',
          minHeight: customSizes ? customSizes.height : '100%',
          overflow: 'hidden',
          position: 'relative'
        }}
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
              updateNextProjectState('▶', dispatch, setProjectIdx, selectedProjectIdx);
            } else if (startX - endX < 0) {
              updateNextProjectState('◀', dispatch, setProjectIdx, selectedProjectIdx);
            }
          }
        }}
      >
        <div
          id="carousel_conveyor"
          ref={carouselConveyor}
          css={css`
            width: ${data.length * 100}%;
            height: 100%;
            display: ${carouselClientSizes ? 'flex' : 'none'};
            position: absolute;
            // left: -100%;
            // left: -${100 * (itemIdx + 1)}%;
            transform: translateX(-${100 * (itemIdx + 1) / data.length}%);
            transition: ${flag ? 'none' : '0.3s'};
          `}
        >
          {data}
        </div>
        {
          mode === 'timer'
            ?
              <div
                id="carousel_progress_bar"
                css={css`
                  @keyframes test {
                    from {
                      width: 0;
                    }
      
                    to {
                      width: 100%;
                    }
                  }
      
                  height: 1vh;
                  position: absolute;
                  background: var(--point-light);
                  animation: ${
                    modalState
                      ? foo
                        ? '3s test'
                        : 'none'
                      : 'none'
                  };
                  width: ${!foo ? '100%' : '0'};
                `}
              />
            :
              ''
        }
      </div>
    </>
  );
}
