import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, border } from '../styles/presets';
import { skills } from '../db/aboutData';

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
export const imageContainer = array => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const image =
      <div
        key={i+1}
        className={`image ${i+1}`}
        data-index={i}
        css={css`
          margin: 0 30px;
          ${border}
          min-width: 280px;
          min-height: 157.5px;
          width: 32vw;
          height:18vw;
        `}
      >{`img ${i}`}</div>;
    arr.push(image);
  }
  return (
    <div
      className="image-container"
      css={css`
        margin: 20px 0;
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
    const icon =
      <div
        key={i+1}
        className={`image-${i+1}`}
        css={css`
          margin: 0 10px;
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
    arr.push(icon);
  }
  return (
    <div
      className="icon-container"
      css={css`
        margin: 20px 0;
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