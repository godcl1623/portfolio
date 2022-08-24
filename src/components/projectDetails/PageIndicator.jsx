import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */

import { setProjectIndex } from 'slices';
import { isEqual } from 'utils/capsuledConditions';

import useInitializeProjectIndex from './hooks/useInitializeProjectIndex';
import { pageIndicatorContainerStyle } from './styles/pageIndicatorStyle';
import IndicatorButton from './subComponents/IndicatorButton';

const PageIndicator = ({ data }) => {
  const projectsList = data;
  const selectedProjectIndex = useSelector(({ sliceReducers }) => sliceReducers.selectedProjectIndex);

  const dispatch = useDispatch();
  const { localProjectIndex } = useInitializeProjectIndex(selectedProjectIndex, projectsList);

  function handleClick(event) {
    const selectedOne = event.target.htmlFor;
    const selectedIndex = projectsList.indexOf(selectedOne);
    dispatch(setProjectIndex(selectedIndex));
  }

  const indicators = projectsList.map((project, projectIndex) => {
    const isChecked = isEqual(projectIndex, localProjectIndex);
    return (
      <IndicatorButton
        key={`fragment_${projectIndex}`}
        project={project}
        checkedFlag={isChecked}
        clickHandler={handleClick}
      />
    );
  });

  return (
    <div
      className="page-indicator"
      css={pageIndicatorContainerStyle}
    >
      { indicators }
    </div>
  );
};

export default React.memo(PageIndicator);
