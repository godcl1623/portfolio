/* Dependencies */
// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdClose } from "react-icons/md";
import { sizes, flex } from '../../styles/presets';
import { Button } from '../../styles/elementsPreset';

const Modal = props => {
  const location = useLocation();
  // 호출 주체에 따라 다른 컴포넌트 표시
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
        border: 1px solid black;
        border-radius: 20px;
        // width: ${props.modalState ? styleWidth : 0};
        // height: ${props.modalState ? styleHeight : 0};
        width: ${styleWidth};
        height: ${styleHeight};
        ${flex.vertical}
        background: white;
        top: 50%;
        left: 50%;
        position: relative;
        transform: translate(-50%, -50%) ${props.modalState ? 'scale(1)' : 'scale(0)'};
        z-index: 2;
        overflow: hidden;
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
          min-width: 30px;
          width: 2vw;
          min-height: 30px;
          height: 2vw;
          cursor: pointer;
          top: 20px;
          right: 20px;
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

export default Modal;