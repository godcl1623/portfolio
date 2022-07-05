import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdHome } from 'react-icons/md';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { setIsChanged } from '../../slices';

import { flex, sizes, mediaQuery } from '../../styles/presets';

const Common = props => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    dispatch(setIsChanged(true));
    setTimeout(() => navigate('/'), 300);
  };

  return (
    <div
      className="Common"
      css={css`
        padding: 1.25rem 3.125rem;
        ${mediaQuery.setMobile} {
          padding: 0.625rem 1.25rem;
        }
        ${sizes.full}
        height: ${location.pathname === '/about' ? 'max-content' : '100%'};
        @media (orientation: landscape) and (max-width: 1023px) {
          padding: 0.625rem 1.25rem;
        }
      `}
    >
      <div
        className="header"
        css={css`
          padding: var(--padding) 0;
          ${flex.horizontal.center}
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          position: relative;
          @media (orientation: landscape) and (max-width: 1023px) {
            padding: 1.25rem 0;
          }
        `}
      >
        <button
          onClick={handleClick}
          css={css`
            border: none;
            border-radius: 0.438rem;
            padding: 0;
            min-width: 1.563rem;
            min-height: 1.563rem;
            width: calc(var(--h2)*1.2);
            height: calc(var(--h2)*1.2);
            background-color: var(--point-light);
            -webkit-box-shadow: 0 0 0.188rem 0.188rem var(--box-shadow);
                    box-shadow: 0 0 0.188rem 0.188rem var(--box-shadow);
            left: 1.875rem;
            cursor: pointer;

            :hover {
              -webkit-filter: brightness(90%);
                      filter: brightness(90%);
            }

            :active {
              -webkit-transform: scale(0.95);
                  -ms-transform: scale(0.95);
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
        <h1
          css={css`
            position: absolute;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
          `}
        >{props.heading}</h1>
      </div>
      <hr />
      { props.passed }
    </div>
  );
};

export default React.memo(Common);