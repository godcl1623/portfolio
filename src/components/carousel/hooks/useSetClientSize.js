import React from 'react';

const useSetClientSize = carouselContainer => {
  const [carouselClientSizes, setCarouselClientSizes] = React.useState();

  React.useEffect(() => {
    if (carouselContainer) {
      const newState = {
        height: carouselContainer.clientHeight,
        left: carouselContainer.offsetLeft,
        width: carouselContainer.clientWidth
      };
      setClientSizes(carouselClientSizes, newState);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselContainer]);

  const setClientSizes = (originalState, newState) => {
    setCarouselClientSizes({
      ...originalState,
      height: newState.height,
      left: newState.left,
      width: newState.width
    });
  };

  return { carouselClientSizes };
};

export default useSetClientSize;
