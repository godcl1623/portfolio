/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */

import useSetClientSize from './hooks/useSetClientSize';
import useCarouselReorder from './hooks/useCarouselReorder';
import useTimerReorder from './hooks/useTimerReorder';
import * as carouselStyles from './styles/carouselStyle';

export default function TimerCarousel({ dataLength, displayTgt, mode, options }) {
  const [carouselItemIdx, setItemIdx] = useState(0);
  const [flag, setFlag] = useState(false);
  const [initializeTimerFlag, setTimerFlag] = useState(true);
  const localOptions = options || {};
  const { customSizes, timer } = localOptions;
  const carouselCnt = useRef(null);
  const carouselConveyor = useRef(null);
  const { carouselClientSizes } = useSetClientSize(carouselCnt.current);
  useCarouselReorder({ dataLength, carouselItemIdx, flag }, { setItemIdx, setFlag }, 'timer');
  useTimerReorder({ mode, dataLength, initializeTimerFlag, timer }, { setItemIdx, setTimerFlag });

  return (
    <>
      <div
        id="carousel_container"
        ref={carouselCnt}
        css={carouselCntStyle(carouselCnt, customSizes)}
      >
        <div
          id="carousel_conveyor"
          ref={carouselConveyor}
          css={carouselConveyorStyle(dataLength, carouselClientSizes, carouselItemIdx, flag)}
        >
          {displayTgt}
        </div>
        <div
          id="carousel_progress_bar"
          css={progressBarStyle(dataLength, initializeTimerFlag, timer)}
        />
      </div>
    </>
  );
}

const { carouselCntStyle, carouselConveyorStyle, progressBarStyle } = carouselStyles;
