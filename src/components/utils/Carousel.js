import React, { useRef, useState, useEffect } from 'react';
// import Buttons from './modes/Buttons';

function setClientSizes(originalState, setState, newState) {
  setState({
    ...originalState,
    height: newState.height,
    left: newState.left,
    width: newState.width
  })
}

function Content({ color, number, width }) {
  return (
    <div
      className="carousel_content"
      style={{
        width,
        height: '100%',
        backgroundColor: color
      }}
    >
      Content #{ number }
    </div>
  );
}

export default function Carousel({ data, mode }) {
  const [carouselClientSizes, setCarouselClientSizes] = useState();
  const [carouselItemIdx, setItemIdx] = useState(0);
  const [flag, setFlag] = useState(false);
  const carouselCnt = useRef(null);
  const carouselTimer = useRef();
  const progressTimer = useRef();
  const progressVal = useRef(0);
  const carWidth = carouselClientSizes ? carouselClientSizes.width : 0;

  useEffect(() => {
    if (carouselCnt.current) {
      const newState = {
        height: carouselCnt.current.clientHeight,
        left: carouselCnt.current.offsetLeft,
        width: carouselCnt.current.clientWidth
      };
      setClientSizes(carouselClientSizes, setCarouselClientSizes, newState);
    }
  }, [carouselCnt.current])

  useEffect(() => {
    if (carouselItemIdx > data.length - 1) {
      setItemIdx(data.length);
      setTimeout(() => {
        setItemIdx(0)
        setFlag(true)
      }, 200);
    } else if (carouselItemIdx < 0) {
      setItemIdx(-1);
      setTimeout(() => {
        setItemIdx(data.length - 1)
        setFlag(true)
      }, 200);
    }
  }, [carouselItemIdx])

  useEffect(() => {
    if (flag) {
      setTimeout(() => setFlag(false), 100);
    }
  }, [flag])

  useEffect(() => {
    if (mode === 'timer') {
      carouselTimer.current = setInterval(() => setItemIdx(carouselItemIdx + 1), 3000);
      progressTimer.current = setInterval(progressVal.current += 1, 300);
    }
    return () => {
      clearInterval(carouselTimer.current);
      clearInterval(progressTimer.current);
      carouselTimer.current = undefined;
      progressTimer.current = undefined;
      progressVal.current = 0;
    };
  }, [mode])

  // const carouselContents = (data, width) => {
  //   const processedData = [data[data.length - 1], ...data, data[0]];
  //   return processedData.map((ele, idx) => (
  //     <React.Fragment key={idx}>
  //       <Content color={ele} number={idx} width={width} />
  //     </React.Fragment>
  //   ));
  // };

  return (
    <>
      {/* {
        mode === 'button'
        ?
          <Buttons
            direction='left'
            utils={{ flag, setState: setItemIdx, carouselClientSizes }}
          />
        : ''
      } */}
      <button
        id="btn_left"
        style={{
          width: '30px',
          height: '30px',
          border: '1px solid black',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: carouselClientSizes ? (carouselClientSizes.height / 2) : '50%',
          // left: carouselClientSizes ? (carouselClientSizes.left) - 40 : '0',
          left: -10,
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          background: 'white',
          color: 'black'
        }}
        disabled={flag}
        // onClick={e => setItemIdx(prevVal => prevVal -= 1)}
      >
        ◀
      </button>
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
          style={{
            width: carWidth * data.length,
            height: '100%',
            display: carouselClientSizes ? 'flex' : 'none',
            position: 'absolute',
            left: -carWidth,
            transform: `translateX(${-carWidth * (carouselItemIdx)}px)`,
            transition: flag ? 'none' : '0.3s'
          }}
        >
          {
            // carouselContents(data, carWidth)
            data
          }
        </div>
        <div
          style={{
            width: `${progressVal.current}%`,
            height: '5px',
            position: 'absolute',
            background: 'black',
            transition: 'all 0.3s'
          }}
        />
      </div>
      {/* {
        mode === 'button'
        ?
          <Buttons
            direction='right'
            utils={{ flag, setState: setItemIdx, carouselClientSizes }}
          />
        : ''
      } */}
      <button
        id="btn_right"
        style={{
          width: '30px',
          height: '30px',
          border: '1px solid black',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: carouselClientSizes ? (carouselClientSizes.height / 2) : '50%',
          left: carouselClientSizes ? (carouselClientSizes.left + carouselClientSizes.width) + 10 : '0',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          background: 'white',
          color: 'black'
        }}
        // onClick={e => setItemIdx(prevVal => prevVal += 1)}
        disabled={flag}
      >
        ▶
      </button>
    </>
  );
}