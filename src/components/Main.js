/* Dependencies */
// libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// components
import Modal from './Modal';
import Contact from './layouts/Contact';
// action creator
import modalHandler from '../actions';

/* Component Body */
const Main = () => {
  // state 'modalState'값
  const modalState = useSelector(state => state.modalState);
  // action 업데이트용
  const dispatch = useDispatch();

  return (
    <div className="Main">
      <h2>이치행</h2>
      <h4>프론트엔드 포트폴리오</h4>
      <hr />
      <p>
        프론트엔드 개발자를 희망하는 이치행의 포트폴리오 사이트입니다.
      </p>
      <div className="menu">
          <button onClick={() => dispatch(modalHandler(true))}>CONTACT</button>
          <Link to="/about">ABOUT</Link>
          <Link to="/works">WORKS</Link>
          <a href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</a>
          <a href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</a>
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