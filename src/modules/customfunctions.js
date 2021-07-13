import React from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, border } from '../styles/presets';
import { skills } from '../db/aboutData';
import projectsData from '../db/projectsData';

const { headers, images } = projectsData;

// selectedProject 값에 따라 다른 제목 표시 -> 내용 표시로 변경
export const selectedHeader = args => (
  <h1
    css={css`
      margin-bottom: 40px;
      text-align: center;
    `}
  >{ args }</h1>
);

// export const imageContainer = array => {
export const imageContainer = (array, foo) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const test =
      <div
        key={i+1}
        className={`image ${i+1}`}
        data-index={i}
        css={css`
          margin: 0 30px;
          ${border}
          width: 32vw;
          height:18vw;
          // opacity: 0;
        `}
      >{`img ${i}`}</div>;
    arr.push(test);
  }
  return (
    <div
      className="image-container"
      css={css`
        margin: 20px 0;
        // border: 3px solid red;
        ${flex.vertical};
        position: relative;
        max-width: 50%;
        width: 100%;
      `}
    >
      <div
        className="image-slider"
        css={css`
          display: flex;
          justify-content: center;
          width: ${100 * array.length}%;
          position: relative;
          // left: ${slideStartPoint(array)-100}%;
          transition: all 0.5s;
        `}
      >
        {arr}
      </div>
    </div>
  );
};

export const iconContainer = index => {
  const arr = [];
  for (let i = 0; i < index; i++) {
    const test =
      <div
        key={i+1}
        className={`image-${i+1}`}
        css={css`
          margin: 0 10px;
          // ${border}
          ${flex.horizontal.center}
        `}
      >
        <img
          src={ skills.icon[i] }
          alt="icon"
          css={css`
            min-width: 30px;
            min-height: 30px;
            width: 2.5vw;
            height: 2.5vw;
          `}
        />
      </div>;
    arr.push(test);
  }
  return (
    <div
      className="icon-container"
      css={css`
        margin: 20px 0;
        // ${border}
        ${flex.horizontal.center}
      `}
    >
      {arr}
    </div>
  );
};

export const slideStartPoint = headers => {
  const n = headers.length;
  if (n % 2 !== 0) {
    return 100 * ((n + 1) / 2 - 1);
  } 
  return 50 + 100 * (n / 2 - 1);
};

export const debouncer = (func, wait = 14, immediate = true) => {
  let timeout;
  return (...argms) => {
    const context = this
    const args = argms;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};