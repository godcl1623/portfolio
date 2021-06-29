/* Dependencies */
// libraries
import React from 'react';
import ReactDOM from 'react-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdClose } from "react-icons/md";
import { sizes } from '../styles/presets';

const Modal = props => {
  // 호출 주체에 따라 다른 컴포넌트 표시
  const PropsComponent = props.componentInDisplay;

  // 표시 컴포넌트에 따른 사이즈 조정
  const styleWidth = PropsComponent.name === 'Projects' ? '75%' : '45%';
  const styleHeight = PropsComponent.name === 'Projects' ? '90%' : '60%';

  return ReactDOM.createPortal(
  // 모달창 배경
  <div
    className="modals"
    onClick={e => {
        if (e.target.className === 'modals') props.changeState(false);
      }
    }
    style={
      {
        background: 'rgba(0, 0, 0, 0.85)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1',
        display: `${props.modalState ? 'block' : 'none'}`
      }
    }
  >
    {/* 모달창 본문 */}
    <div
      className="modal-body"
      style={
        {
          border: '1px solid black',
          width: styleWidth,
          height: styleHeight,
          background: 'white',
          top: '50%',
          left: '50%',
          position: 'relative',
          transform: 'translate(-50%, -50%)',
          zIndex: '2',
          overflowY: 'hidden'
        }
      }
    >
      {/* 닫기 버튼 */}
      <button
        onClick={() => props.changeState(false)}
        css={css`
          position: fixed;
          width: 30px;
          height: 30px;
          cursor: pointer;
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