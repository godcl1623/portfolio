import React from 'react';
import { imageContainer, iconContainer, projectComment } from './projectsData';
/*
구현 계획
1. 이미지
  - 전달 방법: 배열로 전달
  - 표시 방법: map api를 사용하여 슬라이드쇼 구현

2. 아이콘
  - 전달 방법: 배열로 전달
  - 표시 방법: 1~2행으로 표시

3. 프로젝트 설명
  - 전달 방법: 통짜 텍스트
  - 표시 방법: 통짜 텍스트

4. (옵션) 미리보기
  - 전달 방법: 배열로 전달
  - 표시 방법: map api를 사용해 1행 이상으로 표시

5. 페이지 표시
  - 전달 방법: X
  - 표시 방법: 슬라이드쇼 연습 프로젝트 참조
*/

const BodySection = () => (
  <div className="container 2" style={{ border: '1px solid black', width: '100%' }}>
    <h1 style={{ border: '1px solid black' }}>Projects</h1>
    { imageContainer(2) }
    { iconContainer(7) }
    <p className="projects-comments" style={{ border: '1px solid black', width: '80%', height: '50px'}}>{ projectComment }</p>
    <div className="link-container" style={{ border: '1px solid black', width: '80%', height: '50px'}}>
      <a href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</a>
      <a href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</a>
    </div>
  </div>
);

export default BodySection;