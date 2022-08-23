/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from 'styles/presets';

export const contactContainerStyle = modalState => css`
  ${flex.vertical}
  width: 100%;
  height: 100%;
  opacity: ${modalState ? '100%' : '0'};
`;

export const contactHrStyle = css`
  margin: 3% 0 7%;
  border: 0.188rem solid var(--point-dark);
  width: 50%;
  @media (max-height: 449px) {
    margin: 1% 0 3%;
  }
`;

export const mailButtonStyle = css`
  all: unset;
  width: 20%;
  ${flex.horizontal.center}
`;

export const sendMailButtonStyle = css`
  margin: 40% 0 0;
  padding: 6% 4% 9%;
  ${flex.horizontal.center}
  width: 90%;
  min-width: 10.813rem;
  @media (max-height: 449px) {
    margin: 20% 0 0;
  }

  * {
    margin: 0 0.313rem;
  }
`;
