import React, { useRef, useState, useEffect } from 'react';

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
  const [flag, setFlag] = useState(false);
  const carouselCnt = useRef(null);
  const carouselTimer = useRef();
  const progressTimer = useRef();
  const progressVal = useRef(0);
  const carouselConveyor = useRef(null);
  const {
    modalState,
    dispatch,
    selectedProjectIdx,
    setProjectIdx
  } = options;
  const carWidth = carouselClientSizes ? carouselClientSizes.width : 0;

  useEffect(() => {
    if (selectedProjectIdx > data.length - 3) {
      setTimeout(() => {
        dispatch(setProjectIdx(0));
      }, 300);
    } else if (selectedProjectIdx < 0) {
      setTimeout(() => {
        dispatch(setProjectIdx(data.length - 3));
      }, 300);
    }
  }, [selectedProjectIdx]);

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
    dispatch(setProjectIdx(carouselItemIdx));
    if (carouselItemIdx > data.length - 3) {
      // carouselConveyor.current.style.transition = '';
      setTimeout(() => {
        // carouselConveyor.current.style.transition = '';
        setItemIdx(0);
        setFlag(true);
      }, 300);
      // setTimeout(() => {
      //   carouselConveyor.current.style.transition = '0.3s';
      // }, 400)
    } else if (carouselItemIdx < 0) {
      setTimeout(() => {
        setItemIdx(data.length - 3);
        setFlag(true);
      }, 200);
    }
  }, [carouselItemIdx]);

  useEffect(() => {
    if (flag) {
      setTimeout(() => setFlag(false), 100);
    }
  }, [flag]);

  useEffect(() => {
    if (modalState) {
      if (mode === 'timer') {
        carouselTimer.current = setInterval(() => {
          setItemIdx(prevVal => prevVal + 1);
        }, 3000);
        // progressTimer.current = setInterval(progressVal.current += 1, 300);
      }
    }
    return () => {
      clearInterval(carouselTimer.current);
      // clearInterval(progressTimer.current);
      carouselTimer.current = undefined;
      // progressTimer.current = undefined;
      // progressVal.current = 0;
    };
  }, [mode, modalState]);

  return (
    <>
      <div
        id="carousel_container"
        ref={carouselCnt}
        style={{
          margin: '0 auto',
          border: '1px solid black',
          width: '100%',
          height: '100%',
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'relative'
        }}
      >
        <div
          id="carousel_conveyor"
          ref={carouselConveyor}
          style={{
            width: carWidth * data.length,
            height: '100%',
            display: carouselClientSizes ? 'flex' : 'none',
            position: 'absolute',
            left: -carWidth,
            transform: `translateX(${-carWidth * selectedProjectIdx}px)`,
            transition: flag ? 'none' : '0.3s'
          }}
        >
          {data}
        </div>
        {/* <div
          style={{
            width: `${progressVal.current}%`,
            height: '5px',
            position: 'absolute',
            background: 'black',
            transition: 'all 0.3s'
          }}
        /> */}
      </div>
    </>
  );
}
