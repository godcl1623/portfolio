import React from 'react';
import { useDispatch } from 'react-redux';
import { setProjectIndex } from 'slices';
import { isFrontBiggerThanBack, isFrontSmallerThanBack, isNull } from 'utils/capsuledConditions';
import { DEFAULT_DELAY_TIME } from 'utils/constants';

const useCarouselReorder = (properties, callbacks, mode) => {
  const { dataLength, carouselItemIndex, flag } = properties;
  const { setItemIndex, setFlag } = callbacks;
  const dispatch = useDispatch();
  const dispatchTo = carouselIndex => dispatch(setProjectIndex(carouselIndex));
  const changeOrder = isNull(mode) ? dispatchTo : setItemIndex;

  React.useEffect(() => {
    let reorderTimeout = 0;
    if (isFrontBiggerThanBack(carouselItemIndex, dataLength - 3)) {
      reorderTimeout = setCarouselOrder(changeOrder, 0);
    } else if (isFrontSmallerThanBack(carouselItemIndex, 0)) {
      reorderTimeout = setCarouselOrder(changeOrder, dataLength - 3);
    }
    return () => clearTimeout(reorderTimeout);
  }, [carouselItemIndex]);

  const setCarouselOrder = (reorderFunction, carouselIndex) =>
    setTimeout(() => {
      reorderFunction(carouselIndex);
      setFlag(true);
    }, DEFAULT_DELAY_TIME);

  React.useEffect(() => {
    if (flag) {
      setTimeout(() => setFlag(false), DEFAULT_DELAY_TIME / 3);
    }
  }, [flag]);
};

export default useCarouselReorder;
