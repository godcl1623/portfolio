/* Dependencies */
// libraries
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdHome } from 'react-icons/md';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// action creators
import { selectedMenuCreator, changeDetectedCreator } from '../../actions';
// modules
import { flex, sizes, mediaQuery } from '../../styles/presets';

// Component Body
const Common = props => {
  // redux - dispatch
  const dispatch = useDispatch();
  // react-router-dom
  const history = useHistory();
  const location = useLocation();

  // Component-specific Function
  const handleClick = () => {
    dispatch(changeDetectedCreator(true));
    setTimeout(() => history.push('/'), 300);
    dispatch(selectedMenuCreator(''));
  };

  return (
    <div
      className="Common"
      css={css`
        padding: 20px 50px;
        ${mediaQuery.setMobile} {
          padding: 10px 20px;
        }
        ${sizes.full}
        height: ${location.pathname === '/about' ? 'max-content' : '100%'};
        @media (orientation: landscape) and (max-width: 1023px) {
          padding: 10px 20px;
        }
      `}
    >
      <div
        className="header"
        css={css`
          padding: var(--padding) 0;
          ${flex.horizontal.center}
          justify-content: flex-start;
          position: relative;
          @media (orientation: landscape) and (max-width: 1023px) {
            padding: 20px 0;
          }
        `}
      >
        {/* 홈 버튼 */}
        <button
          onClick={handleClick}
          css={css`
            border: none;
            border-radius: 7px;
            padding: 0;
            min-width: 25px;
            min-height: 25px;
            width: calc(var(--h2)*1.2);
            height: calc(var(--h2)*1.2);
            background-color: var(--point-light);
            box-shadow: 0 0 3px 3px var(--box-shadow);
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
              color: var(--point-dark);
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
      <hr />
      {/* About 참조 */}
      { props.passed }
    </div>
  );
};

export default React.memo(Common);