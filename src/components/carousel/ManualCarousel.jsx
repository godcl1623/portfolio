/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */

import useSetClientSize from './hooks/useSetClientSize';
import useCarouselReorder from './hooks/useCarouselReorder';
import useReorderByTouch from './hooks/useReorderByTouch';

import * as carouselStyles from './styles/carouselStyle';

export default function ManualCarousel({ dataLength, displayTgt }) {
  const selectedProjectIdx = useSelector(({ sliceReducers }) => sliceReducers.selectedProjectIdx);
  const [carouselItemIdx, setItemIdx] = useState(0);
  const [flag, setFlag] = useState(false);

  const carouselCnt = useRef(null);
  const carouselConveyor = useRef(null);

  const itemIdx = selectedProjectIdx || carouselItemIdx;

  const { carouselClientSizes } = useSetClientSize(carouselCnt.current);
  const { touchMovementHandler, touchEndHandler } = useReorderByTouch();
  useCarouselReorder({ dataLength, carouselItemIdx: selectedProjectIdx, flag }, { setItemIdx, setFlag });

  return (
    <div
      id="carousel_container"
      ref={carouselCnt}
      css={carouselCntStyle(carouselCnt)}
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
    </div>
  );
}

const { carouselCntStyle, carouselConveyorStyle } = carouselStyles;
