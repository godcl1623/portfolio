/* Dependencies */
// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdClose } from "react-icons/md";
// modules
import { Button } from '../../styles/elementsPreset';
import { sizes, flex } from '../../styles/presets';

const Modal = props => {
  // react-router-dom
  const location = useLocation();
  // Props - 호출 주체에 따라 다른 컴포넌트 표시
  const PropsComponent = props.componentInDisplay;

  // 표시 컴포넌트에 따른 사이즈 조정
  const styleWidth = location.pathname === '/works' ? '75%' : '45%';
  const styleHeight = location.pathname === '/works' ? '90%' : '60%';

  return ReactDOM.createPortal(
  <div
    className="modals"
    onClick={e => {
        if (e.target.className.includes('modals')) props.changeState(false);
      }
    }
    css={css`
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
    `}
  >
    { props.buttons ? props.buttons.left : ''}
    {/* 모달창 본문 */}
    <div
      className="modal-body"
      css={css`
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
      `}
    >
      {/* 닫기 버튼 */}
      <Button
        className="close"
        onClick={() => props.changeState(false)}
        css={css`
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
        `}
      >
        <MdClose
          css={css`
            ${sizes.full}
            color: var(--black);
          `}
        />
      </Button>
      {/* 모달창 표시 컴포넌트 */}
      <PropsComponent forRef={props.forRef} />
      { props.indicator ? props.indicator : '' }
    </div>
    { props.buttons ? props.buttons.right : '' }
  </div>,
  document.querySelector('#modal')
);
    }

export default React.memo(Modal);