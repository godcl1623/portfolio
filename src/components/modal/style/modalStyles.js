/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { sizes, flex } from 'styles/presets';

export const modalContainerStyle = props => css`
  background: ${props.modalState ? 'rgba(0, 0, 0, 0.85)' : ''};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${props.modalState ? 2 : 0};
  opacity: ${props.modalState ? '100%' : 0};
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;

  svg {
    pointer-events: none;
  }
`;

export const modalBodyStyle = (props, styleWidth, styleHeight) => css`
  border: 0.063rem solid black;
  border-radius: 1.25rem;
  width: ${styleWidth};
  height: ${styleHeight};
  ${flex.vertical}
  background: white;
  top: 50%;
  left: 50%;
  position: relative;
  -webkit-transform: translate(-50%, -50%) ${props.modalState ? 'scale(1)' : 'scale(0)'};
  -ms-transform: translate(-50%, -50%) ${props.modalState ? 'scale(1)' : 'scale(0)'};
  transform: translate(-50%, -50%) ${props.modalState ? 'scale(1)' : 'scale(0)'};
  z-index: 2;
  overflow: hidden;
  -webkit-transition: all 0.7s;
  -o-transition: all 0.7s;
  transition: all 0.7s;
  @media (max-width: 899px) {
    width: 100%;
  }
  @media (max-height: 449px) {
    height: 90%;
  }
`;

export const modalCloseButtonStyle = props => css`
  padding: 0;
  position: fixed;
  min-width: 1.875rem;
  width: 2vw;
  min-height: 1.875rem;
  height: 2vw;
  cursor: pointer;
  top: 1.25rem;
  right: 1.25rem;
  background: var(--point-light);
  z-index: ${props.modalState ? 2 : 0};
`;

export const modalCloseIconStyle = css`
  ${sizes.full}
  color: var(--black);
`;
