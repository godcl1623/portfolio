import { isEqual } from './capsuledConditions';

export const debouncer = (callback, wait = 14, immediate = true) => {
  let timeout;
  return (...argms) => {
    const context = this;
    const args = argms;
    const later = function () {
      timeout = null;
      if (!immediate) callback.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) callback.apply(context, args);
  };
};

export const updateProjectState = (callback, buttonText, selectedProjectIndex) => {
  let projectNumber = selectedProjectIndex;
  projectNumber = isEqual(buttonText, '▶') ? projectNumber + 1 : projectNumber - 1;
  callback(projectNumber);
};
