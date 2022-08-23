/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { isEqual } from 'utils/capsuledConditions';

import { flex } from 'styles/presets';

export const pageButtonContainerStyle = css`
  ${flex.vertical}
  z-index: 2;
`;

export const pageButtonsStyle = direction => css`
  border: 0.063rem solid transparent;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 0.188rem 0.188rem rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0.188rem 0.188rem rgba(0, 0, 0, 0.3);
  min-width: 3.125rem;
  width: 3vw;
  min-height: 3.125rem;
  height: 3vw;
  position: absolute;
  top: 45%;
  ${isEqual(direction, 'left') ? 'left: 5%' : 'right: 5%'};
  cursor: pointer;
  background-color: var(--point-light);
  opacity: 50%;
  color: var(--point-dark);
  font-size: 1vw;

  :hover {
    -webkit-filter: brightness(0.9);
    filter: brightness(0.9);
  }

  :active {
    -webkit-filter: brightness(1.1);
    filter: brightness(1.1);
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`;
