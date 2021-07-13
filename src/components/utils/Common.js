/* Dependencies */
// libraries
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdHome } from 'react-icons/md';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// action creators
import { selectedMenuCreator, changeDetectedCreator } from '../../actions';
// modules
import { flex, sizes } from '../../styles/presets';

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
        padding: 0 50px 30px;
        ${sizes.full}
      `}
    >
      <div
        className="header"
        css={css`
          padding: var(--padding) 0;
          ${flex.horizontal.center}
          justify-content: flex-start;
          position: relative;
        `}
      >
        {/* 홈 버튼 */}
        <button
          onClick={handleClick}
          css={css`
            border: none;
            border-radius: 7px;
            padding: 0;
            min-width: calc(var(--h1)*0.5);
            min-height: calc(var(--h1)*0.5);
            width: calc(var(--btnWithSvg)*1.2);
            height: calc(var(--btnWithSvg)*1.2);
            box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
            // position: absolute;
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
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          `}
        >{props.heading}</h1>
      </div>
      <hr
        css={css`
          border-color: white;
        `}
      />
      {/* About 참조 */}
      { props.passed }
    </div>
  );
};

export default Common;