import React from 'react';
import { useSelector } from 'react-redux';
import { isEqual, isFrontBiggerThanBack, isSatisfyAnd } from 'utils/capsuledConditions';
import { DEFAULT_DELAY_TIME } from 'utils/constants';

const useTimerReorder = (properties, callbacks) => {
  const { mode, dataLength, initializeTimerFlag, timer } = properties;
  const { setItemIndex, setTimerFlag } = callbacks;
  const modalState = useSelector(({ sliceReducers }) => sliceReducers.modalState);

  React.useEffect(() => {
    let intervalTimer = 0;
    if (modalState) {
      const isModeTimer = isEqual(mode, 'timer');
      const isFrontBig = isFrontBiggerThanBack(dataLength - 2, 1);
      if (isSatisfyAnd(isModeTimer, isFrontBig)) {
        intervalTimer = setInterval(() => {
          setItemIndex(prevVal => prevVal + 1);
          setTimerFlag(!!initializeTimerFlag);
        }, ((timer * DEFAULT_DELAY_TIME) / 3) * 10 || DEFAULT_DELAY_TIME * 10);
      }
    }
    return () => clearInterval(intervalTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, modalState]);

  React.useEffect(() => {
    if (modalState) {
      if (initializeTimerFlag) {
        setTimeout(() => setTimerFlag(!initializeTimerFlag), timer * 1000 - 50 || 2950);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initializeTimerFlag, modalState]);
};

export default useTimerReorder;
