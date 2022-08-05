import React from 'react';
import { useDispatch } from 'react-redux';
import { setProjectIdx } from 'slices';
import { isFrontBiggerThanBack, isFrontSmallerThanBack, isNull } from 'utils/capsuledConditions';
import { DEFAULT_DELAY_TIME } from 'utils/constants';

const useCarouselReorder = (properties, callbacks, mode) => {
  const { dataLength, carouselItemIdx, flag } = properties;
  const { setItemIdx, setFlag } = callbacks;
  const dispatch = useDispatch();
  const dispatchTo = carouselIndex => dispatch(setProjectIdx(carouselIndex));
  const changeOrder = isNull(mode) ? dispatchTo : setItemIdx;

  React.useEffect(() => {
    let reorderTimeout = 0;
    if (isFrontBiggerThanBack(carouselItemIdx, dataLength - 3)) {
      reorderTimeout = setCarouselOrder(changeOrder, 0);
    } else if (isFrontSmallerThanBack(carouselItemIdx, 0)) {
      reorderTimeout = setCarouselOrder(changeOrder, dataLength - 3);
    }
    return () => clearTimeout(reorderTimeout);
  }, [carouselItemIdx]);

  const setCarouselOrder = (reorderFunc, carouselIndex) =>
    setTimeout(() => {
      reorderFunc(carouselIndex);
      setFlag(true);
    }, DEFAULT_DELAY_TIME);

  React.useEffect(() => {
    if (flag) {
      setTimeout(() => setFlag(false), DEFAULT_DELAY_TIME / 3);
    }
  }, [flag]);
};

export default useCarouselReorder;
