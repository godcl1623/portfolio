/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { flex } from 'styles/presets';

export const AboutStyle = changeStatus => css`
  margin: 1.875rem auto;
  border: none;
  border-radius: 0.625rem;
  -webkit-box-shadow: 0 0 0.625rem 0.625rem var(--box-shadow);
  box-shadow: 0 0 0.625rem 0.625rem var(--box-shadow);
  ${flex.vertical}
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: var(--background-width);
  max-width: 1920px;
  height: 100%;
  background-color: var(--white);
  opacity: ${changeStatus ? '0' : '100%'};
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  overflow-y: scroll;

  @media (orientation: portrait) {
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
  }

  @media (max-width: 1023px) and (orientation: landscape) {
    margin: 0;
  }

  *:not(.to-top) {
    opacity: ${changeStatus ? '0' : '100%'};
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
`;

export const topButtonStyle = css`
margin: 0 auto;
border-radius: 50%;
padding: 0;
min-width: 1.875rem;
min-height: 1.875rem;
width: 2vw;
height: 2vw;
position: fixed;
bottom: 2.188rem;
-webkit-transition: opacity 0.3s;
-o-transition: opacity 0.3s;
transition: opacity 0.3s;
display: none;
background: var(--point-light);

@media (max-width: 1023px) and (orientation: landscape) {
  bottom: 0.438rem;
}
`;

export const topButtonIconStyle = css`
  width: 100%;
  height: 100%;
  color: var(--point-dark);
`;
