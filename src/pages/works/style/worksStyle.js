/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from 'styles/presets';

const workStyle = changeStatus => css`
  margin: 1.875rem auto;
  border-radius: 0.625rem;
  box-shadow: 0 0 0.625rem 0.625rem rgba(0, 0, 0, 0.3);
  ${flex.vertical}
  width: var(--background-width);
  max-width: 1920px;
  height: 100%;
  background-color: white;
  opacity: ${changeStatus ? '0' : '100%'};
  transition: all 0.3s;
  overflow: hidden;
  @media (orientation: portrait) and (min-width: 600px) {
    height: max-content;
  }
  @media (orientation: landscape) and (max-width: 1023px) {
    margin: 0;
  }
`;

export default workStyle;