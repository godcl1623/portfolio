/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { flex, mediaQuery } from '../../../styles/presets';

export const mainDivStyle = isChangeDetected => css`
  ${flex.vertical};
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  *:not(.header-container *, .intro, .menu *, .typing_cursor) {
    margin: 1.25rem;
  }

  @media (max-height: 449px) {
    *:not(.header-container *, .intro, .menu *) {
      margin: 0.625rem;
    }
  }

  .header-container,
  hr,
  section,
  a,
  button {
    opacity: ${isChangeDetected ? '0' : '100%'};
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
`;

export const headerContainerStyle = css`
  border-radius: 0.938rem;
  ${flex.vertical};
  min-width: 13.125rem;
  min-height: 8.75rem;
  width: 25vw;
  height: 17vw;
  background-color: var(--point-dark);
  color: var(--white);
  h1,
  h2,
  h3 {
    color: var(--white);
  }
`;

export const h1InContainer = css`
  margin: 0;
  margin-bottom: 5px;
  font-size: calc(14vw * 0.45);
  line-height: 0.9;
  ${mediaQuery.setMobile} {
    font-size: 2.375rem;
  }
`;

export const h2InContainer = css`
  margin: 0;
  font-size: calc(14vw * 0.2);
  text-align: center;
  ${mediaQuery.setMobile} {
    font-size: 1.063rem;
  }
`
export const hrStyle = css`
  border-color: var(--point-main);
  margin: 2% 0;
  width: 35%;
  @media (max-width: 900px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 45%;
  }
`;

export const belowContainer = css`
  ${flex.horizontal.center}

  p {
    margin-right: 0.188rem;
  }
`;

export const introStyle = css`
  color: var(--point-dark);
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export const typingCursorStyle = css`
  margin: 0;
  border: 0.063rem solid var(--point-dark);
  width: 0.156rem;
  height: 1.125rem;
  background-color: var(--point-dark);
  -webkit-animation: blink-effect 1s step-end infinite;
  animation: blink-effect 1s step-end infinite;
  display: inline-block;

  @-webkit-keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

export const menuStyle = css`
  ${flex.horizontal.center}
  ${mediaQuery.setMobile} {
    ${flex.vertical}
    width: 100%;
  }
  button,
  a {
    margin: 1.25rem 0.625rem;
    ${mediaQuery.setMobile} {
      margin: 0.625rem;
      margin-bottom: 1.25rem;
      width: 6.25rem;
      text-align: center;
    }
  }
`;