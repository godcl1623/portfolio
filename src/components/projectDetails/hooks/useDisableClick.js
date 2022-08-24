import React from 'react';

const useDisableClick = (buttonElement, elementIndex, dataLength) => {
  const disableClick = (target, value) => {
    target.disabled = value;
  };

  React.useEffect(() => {
    if (buttonElement) {
      if (elementIndex > dataLength + 2 - 3) {
        disableClick(buttonElement, true);
        setTimeout(() => {
          disableClick(buttonElement, false);
        }, 500);
      } else if (elementIndex < 0) {
        disableClick(buttonElement, true);
        setTimeout(() => {
          disableClick(buttonElement, false);
        }, 500);
      }
    }
  }, [buttonElement, elementIndex, dataLength]);
};

export default useDisableClick;
