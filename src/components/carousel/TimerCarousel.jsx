/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
/** @jsxImportSource @emotion/react */

import useSetClientSize from './hooks/useSetClientSize';
import useCarouselReorder from './hooks/useCarouselReorder';
import useTimerReorder from './hooks/useTimerReorder';
import * as carouselStyles from './styles/carouselStyle';

export default function TimerCarousel({ dataLength, displayTgt, mode, options }) {
  const [carouselItemIndex, setItemIndex] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const [initializeTimerFlag, setTimerFlag] = React.useState(true);
  const localOptions = options || {};
  const { customSizes, timer } = localOptions;
  const carouselContainer = React.useRef(null);
  const carouselConveyor = React.useRef(null);
  const { carouselClientSizes } = useSetClientSize(carouselContainer.current);
  useCarouselReorder({ dataLength, carouselItemIndex, flag }, { setItemIndex, setFlag }, 'timer');
  useTimerReorder({ mode, dataLength, initializeTimerFlag, timer }, { setItemIndex, setTimerFlag });

  return (
    <>
      <div
        id="carousel_container"
        ref={carouselContainer}
        css={carouselContainerStyle(carouselContainer, customSizes)}
      >
        <div
          id="carousel_conveyor"
          ref={carouselConveyor}
          css={carouselConveyorStyle(dataLength, carouselClientSizes, carouselItemIndex, flag)}
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

const { carouselContainerStyle, carouselConveyorStyle, progressBarStyle } = carouselStyles;
