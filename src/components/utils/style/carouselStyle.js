/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const carouselCntStyle = (customSizes, carouselCnt) => css`
  margin: 0 auto;
  border: 1px solid black;
  width: ${customSizes ? customSizes.width : '100%'};
  min-width: ${customSizes && carouselCnt.current ? carouselCnt.current.clientWidth * customSizes.width / 100 >= 400 ? `${customSizes.width}vw` : '400px' : '100%'};
  height: 100%;
  min-height: ${customSizes && carouselCnt.current ? carouselCnt.current.clientHeight * customSizes.width * 9 / 16 / 100 >= 225 ? `${customSizes.width * 9 / 16}vw` : '225px' : '100%'};
  overflow: hidden;
  position: relative;

  @media (max-width: 600px) {
    min-width: 250px;
    min-height: 141px;
  }
`;

export const carouselConveyorStyle = (...args) => {
  const [dataLength, carouselClientSizes, itemIdx, flag] = args;
  return css`
    width: ${dataLength * 100}%;
    height: 100%;
    display: ${carouselClientSizes ? 'flex' : 'none'};
    position: absolute;
    left: -100%;
    left: -${100 * (itemIdx + 1)}%;
    transition: ${flag ? 'none' : '0.3s'};
  `;
};

export const progressBarStyle = (...args) => {
  const [modalState, dataLength, initializeTimerFlag, timer] = args;
  return css`
  @keyframes timerProgress {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  height: 1vh;
  min-height: 1px;
  position: absolute;
  background: var(--point-main);
  opacity: 70%;
  animation: ${
    modalState && dataLength - 1 > 2
      ? initializeTimerFlag
        ? `${timer}s timerProgress`
        : 'none'
      : 'none'
  };
  width: ${!initializeTimerFlag && dataLength - 1 > 2 ? '100%' : '0'};
  `;
}