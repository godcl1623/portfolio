/* Dependencies */
// libraries
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdHome } from 'react-icons/md';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// action creators
import { selectedMenuCreator, changeDetectedCreator } from '../actions';
// modules
import { flex, sizes } from '../styles/presets';

// Component Body
const Common = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    dispatch(changeDetectedCreator(true));
    setTimeout(() => history.push('/'), 500);
    dispatch(selectedMenuCreator(''));
  };

  return (
    <div
      className="Common"
      css={css`
        padding: 0 50px;
        ${sizes.full}
      `}
    >
      <div
        className="header"
        css={css`
          padding: 20px 0;
          ${flex.horizontal.center}
          position: relative;
        `}
      >
        {/* 홈 버튼 */}
        <button
          onClick={handleClick}
          css={css`
            border: none;
            border-radius: 7px;
            padding: 2px;
            width: 30px;
            height: 30px;
            box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
            position: absolute;
            left: 30px;
            cursor: pointer;

            :hover {
              filter: brightness(90%);
            }

            :active {
              transform: scale(0.95);
            }
          `}
        >
          <MdHome
            css={css`
              ${sizes.full}
            `}
          />
        </button>
        {/* 구획 제목 */}
        <h1
          css={css`
            font-size: 50px;
          `}
        >{props.heading}</h1>
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