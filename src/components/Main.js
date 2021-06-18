import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

// Component Body
const Main = () => {
  // redux로 바꾸기
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="Main">
      <h2>이치행</h2>
      <h4>프론트엔드 포트폴리오</h4>
      <hr />
      <p>
        프론트엔드 개발자를 희망하는 이치행의 포트폴리오 사이트입니다.
      </p>
      <div className="menu">
          <button onClick={() => setIsModalOpen(true)}>CONTACT</button>
          <Link to="/about">ABOUT</Link>
          <Link to="/works">WORKS</Link>
          <a href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</a>
          <a href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</a>
      </div>
      <Modal modalState={isModalOpen} changeState={setIsModalOpen} />
    </div>
  );
};

export default Main;