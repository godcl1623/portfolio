/* Dependencies */
// libraries
import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// modules
import { flex, sizes } from '../styles/presets';

// Component Body
const Common = props => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <div
      className="Common"
      css={css`
        ${sizes.full}
      `}
    >
      <div
        className="header"
        css={css`
          ${flex.horizontal.center}
          position: relative;
        `}
      >
        {/* 홈 버튼 */}
        <button
          onClick={handleClick}
          css={css`
            width: 30px;
            height: 30px;
            position: absolute;
            left: 0;
          `}
        >
          <MdHome
            css={css`
              ${sizes.full}
            `}
          />
        </button>
        {/* 구획 제목 */}
        <h1>{props.heading}</h1>
      </div>
      <hr
        css={css`
          border-color: white;
        `}
      />
      {/* About 참조 */}
      { props.selfInfo }
      { props.sections }
    </div>
  );
};

export default Common;