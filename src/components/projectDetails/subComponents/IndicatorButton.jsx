import React from 'react';
/** @jsxImportSource @emotion/react */
import { checkboxStyle, checkboxLabelStyle } from '../styles/pageIndicatorStyle';

const IndicatorButton = ({ project, checkedFlag, clickHandler }) => (
  <>
    <input
      name={project}
      type="checkbox"
      checked={checkedFlag}
      onChange={() => undefined}
      css={checkboxStyle}
    />
    <label
      htmlFor={project}
      onClick={clickHandler}
      css={checkboxLabelStyle}
    />
  </>
);

export default IndicatorButton;
