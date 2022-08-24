/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */

import useSetClientSize from './hooks/useSetClientSize';
import useCarouselReorder from './hooks/useCarouselReorder';
import useReorderByTouch from './hooks/useReorderByTouch';

import * as carouselStyles from './styles/carouselStyle';

export default function ManualCarousel({ dataLength, displayTarget }) {
  const selectedProjectIndex = useSelector(
    ({ sliceReducers }) => sliceReducers.selectedProjectIndex
  );
  const [carouselItemIndex, setItemIndex] = React.useState(0);
  const [flag, setFlag] = React.useState(false);

  const carouselContainer = React.useRef(null);
  const carouselConveyor = React.useRef(null);

  const itemIndex = selectedProjectIndex || carouselItemIndex;

  const { carouselClientSizes } = useSetClientSize(carouselContainer.current);
  const { touchMovementHandler, touchEndHandler } = useReorderByTouch();
  useCarouselReorder(
    { dataLength, carouselItemIndex: selectedProjectIndex, flag },
    { setItemIndex, setFlag }
  );

  return (
    <div
      id="carousel_container"
      ref={carouselContainer}
      css={carouselContainerStyle(carouselContainer)}
      onTouchStart={touchMovementHandler}
      onTouchMove={touchMovementHandler}
      onTouchEnd={touchEndHandler}
    >
      <div
        id="carousel_conveyor"
        ref={carouselConveyor}
        css={carouselConveyorStyle(dataLength, carouselClientSizes, itemIndex, flag)}
      >
        {displayTarget}
      </div>
    </div>
  );
}

const { carouselContainerStyle, carouselConveyorStyle } = carouselStyles;
