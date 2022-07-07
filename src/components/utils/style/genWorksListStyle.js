/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { flex, mediaQuery } from '../../../styles/presets';

export const articleStyle = css`
  ${flex.vertical}
  width: 100%;
  height: auto;
  ${mediaQuery.setMobile} {
    width: 90%;
  }
`;

export const previewImgStyle = css`
  width: 25vw;
  height: 14.063vw;
  max-width: 100%;
  max-height: auto;
  cursor: pointer;
  ${mediaQuery.setMobile} {
    border: 0.063rem solid gray;
    border-bottom: none;
    border-radius: 0.438rem 0.438rem 0 0;
    width: 100%;
    height: auto;
    z-index: 0;
  }
  :active {
    -webkit-transform: scale(0.99);
    -ms-transform: scale(0.99);
    transform: scale(0.99);
  }
`;

export const headerBtnStyle = css`
  margin-top: 1.875rem;
  background: none;
  border: none;
  padding-bottom: 0.625rem;
  ${mediaQuery.setMobile} {
    width: 100%;
    margin: 0 auto;
    font-size: 1.3rem;
    border: 0.063rem solid gray;
    border-radius: 0 0 0.438rem 0.438rem;
    border-top: none;
    z-index: 1;
  }
  @media (orientation: landscape) and (max-width: 1023px) {
    margin-top: 0.625rem;
  }
  :active {
    -webkit-transform: scale(0.99);
    -ms-transform: scale(0.99);
    transform: scale(0.99);
  }
`;