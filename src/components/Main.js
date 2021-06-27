/* Dependencies */
// libraries
import React from 'react';
import { Link } from 'react-router-dom';
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
import { A, Button } from '../styles/elementsPreset';

/* Component Body */
const Main = () => {
  // state 'modalState'값
  const modalState = useSelector(state => state.modalState);
  // action 업데이트용
  const dispatch = useDispatch();
  // 공통 스타일 텍스트
  const linkStyle = `
    padding: 7px;
    border: 1px solid none;
    border-radius: 7px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
    background-color: white;
    color: black;
    text-decoration: none;

    :active {
      filter: brightness(80%);
    }
  `

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
      `}
    >
      <div
        className="header-container"
        css={css`
          ${flex.vertical};
          width: 300px;
          height: 200px;
          background-color: black;
          color: white;
        `}
      >
        <h1>이치행</h1>
        <h2>프론트엔드 포트폴리오</h2>
      </div>
      <hr
        css={css`
          width: 25%;
        `}
      />
      <p>
        프론트엔드 개발자를 희망하는 이치행의 포트폴리오 사이트입니다.
      </p>
      <div className="menu">
          <Link
            to="/about"
            css={css`${linkStyle}`}
          >ABOUT</Link>
          <Link
            to="/works"
            css={css`${linkStyle}`}
          >WORKS</Link>
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