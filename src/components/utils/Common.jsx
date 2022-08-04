import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdHome } from 'react-icons/md';
/** @jsxImportSource @emotion/react */

import { setIsChanged } from 'slices';
import useDelayedNavigate from 'hooks/useDelayedNavigate';

import * as commonStyles from './style/commonStyle';

function Common(props) {
  const dispatch = useDispatch();

  const delayedNavigate = useDelayedNavigate();
  const location = useLocation();

  function handleClick() {
    dispatch(setIsChanged(true));
    delayedNavigate('');
  }

  return (
    <div className="Common" css={commonStyle(location)}>
      <div className="header" css={commonHeaderStyle}>
        <button onClick={handleClick} css={homeBtnStyle}>
          <MdHome css={homeBtnIconStyle} />
        </button>
        <h1 css={pageHeadingStyle}>{props.heading}</h1>
      </div>
      <hr />
      {props.passed}
    </div>
  );
}

export default React.memo(Common);

const { commonStyle, commonHeaderStyle, homeBtnStyle, homeBtnIconStyle, pageHeadingStyle } =
  commonStyles;
