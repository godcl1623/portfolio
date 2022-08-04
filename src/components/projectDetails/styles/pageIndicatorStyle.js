/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { flex, mediaQuery } from 'styles/presets';

export const checkboxStyle = css`
  display: none;
`;

export const checkboxLabelStyle = css`
  margin: 0.938rem;
  border: 0.063rem solid transparent;
  border-radius: 50%;
  padding: 0.063rem;
  -webkit-box-shadow: 0 0 0.625rem 0.125rem var(--box-shadow);
  box-shadow: 0 0 0.625rem 0.125rem var(--box-shadow);
  min-width: 0.625rem;
  min-height: 0.625rem;
  width: 1.2vw;
  height: 1.2vw;
  background: var(--white);
  opacity: 90%;
  cursor: pointer;
  :hover {
    -webkit-filter: brightness(0.9);
    filter: brightness(0.9);
  }
  :active {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`;

export const pageIndicatorContainerStyle = css`
  min-height: 3.125rem;
  ${flex.horizontal.center}
  position: fixed;
  left: 50%;
  bottom: 0;
  ${mediaQuery.setMobile} {
    bottom: -0.625rem;
  }
  @media (orientation: landscape) and (max-width: 1023px) {
    bottom: -1.563rem;
  }
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  input[type='checkbox']:checked + label {
    background: var(--point-light);
    opacity: 90%;
  }
`;
