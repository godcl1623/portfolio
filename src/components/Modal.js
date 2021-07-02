/* Dependencies */
// libraries
import React from 'react';
import ReactDOM from 'react-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdClose } from "react-icons/md";
import { sizes, flex } from '../styles/presets';

const Modal = props => {
  // 호출 주체에 따라 다른 컴포넌트 표시
  const PropsComponent = props.componentInDisplay;

  // 표시 컴포넌트에 따른 사이즈 조정
  const styleWidth = PropsComponent.name === 'Projects' ? '75%' : '45%';
  const styleHeight = PropsComponent.name === 'Projects' ? '90%' : '60%';

  return ReactDOM.createPortal(
  <div
    className="modals"
    onClick={e => {
        if (e.target.className.includes('modals')) props.changeState(false);
        // console.log(e.target);
      }
    }
    css={css`
      background: rgba(0, 0, 0, 0.85);
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
    {/* 모달창 본문 */}
    <div
      className="modal-body"
      css={css`
        border: 1px solid black;
        width: ${props.modalState ? styleWidth : 0};
        height: ${props.modalState ? styleHeight : 0};
        ${flex.vertical}
        background: white;
        top: 50%;
        left: 50%;
        position: relative;
        transform: translate(-50%, -50%);
        z-index: 2;
        overflow-y: hidden;
        transition: all 0.5s;
      `}
    >
      {/* 닫기 버튼 */}
      <button
        className="close"
        onClick={() => props.changeState(false)}
        css={css`
          position: fixed;
          width: 30px;
          height: 30px;
          cursor: pointer;
          top: 10px;
          left: 10px;
          z-index: ${props.modalState ? 2 : 0};
        `}
      >
        <MdClose
          css={css`
            ${sizes.full}
          `}
        />
      </button>
      {/* 모달창 표시 컴포넌트 */}
      <PropsComponent />
    </div>
  </div>,
  document.querySelector('#modal')
);
    }

export default Modal;