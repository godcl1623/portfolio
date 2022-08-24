/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { flex, mediaQuery } from 'styles/presets';

const contentArticleStyle = css`
  margin: 2.5rem auto;
  ${mediaQuery.setMobile} {
    margin: 1.25rem auto;
  }
  ${flex.vertical}
  min-width: 15rem;
  width: 50%;
  position: relative;
  -webkit-transition: all 2.5s;
  -o-transition: all 2.5s;
  transition: all 2.5s;

  p {
    margin: 0.625rem 0;
  }
`;

export default contentArticleStyle;