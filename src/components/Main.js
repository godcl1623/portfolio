/* Dependencies */
// libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// components
import Modal from './Modal';
import Contact from './layouts/Contact';
// action creator
import { modalHandler } from '../actions';
// modules
import { flex, sizes } from '../styles/presets';
import { A, Button, StyledLink } from '../styles/elementsPreset';

/* Component Body */
const Main = () => {
  // state 'modalState'값
  const modalState = useSelector(state => state.modalState);
  // action 업데이트용
  const dispatch = useDispatch();
  const target = React.useRef();
  const content = '프론트엔드 개발자를 희망하는 이치행의 포트폴리오입니다. ';
  React.useEffect(() => {
    let index = 0;
    const typing = () => {
      target.current.textContent += content[index];
      index += 1;
      if (index > content.length - 1) {
        return setTimeout(() => {
          index = 0;
          target.current.textContent = '　';
        }, 190);
      }
    }

    const timerId = setInterval(() => typing(), 200);
    return () => {
      clearInterval(timerId);
      clearTimeout(typing);
    };
  }, [])

  return (
    <div
      className="Main"
      css={css`
        ${flex.vertical};
        ${sizes.full}
        position: relative;

        * {
          // 임시
          margin: 20px;
        }

        @keyframes blink-effect {
          50% {
            opacity: 0;
          }
        }

        .typing_cursor {
          margin: 0;
          border: 1px solid black;
          width: 2.5px;
          height: 18px;
          background-color: black;
          animation: blink-effect 1s step-end infinite;
          display: inline-block;
        }
      `}
    >
      <div
        className="header-container"
        css={css`
          border-radius: 15px;
          ${flex.vertical};
          width: 375px;
          height: 250px;
          background-color: black;
          color: white;
        `}
      >
        <h1>LCH</h1>
        <h2>PORTFOLIO</h2>
      </div>
      <hr
        css={css`
          margin: 30px 0;
          width: 35%;
        `}
      />
      <section
        css={css`
          ${flex.horizontal.center}
        
          p {
            margin-right: 3px;
          }
        `}
        >
        <p className="intro" ref={target}>　</p>
        <span className="typing_cursor"></span>
      </section>
      <div className="menu">
          <StyledLink to="/about">ABOUT</StyledLink>
          <StyledLink to="/works">WORKS</StyledLink>
          <A href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</A>
          <A href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</A>
          <Button onClick={() => dispatch(modalHandler(true))}>CONTACT</Button>
      </div>
      {/*
        modalState: false면 모달창 닫힌 상태
        changeState: 모달창 배경이나 닫기 버튼을 클릭하면 modalState 값을 바꿈
        componentInDisplay: 모달창이 표시할 컴포넌트
       */}
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(modalHandler(boolean))}
        componentInDisplay={Contact}
      />
    </div>
  );
};

export default Main;