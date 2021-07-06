/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, border } from '../styles/presets';
import { skills } from '../db/aboutData';

const tools = {
  // selectedProject 값에 따라 다른 제목 표시 -> 내용 표시로 변경
  selectedHeader: state => {
    let header = '';
    // 추후 반복문으로 구현
    switch (state) {
      case 'project 1':
        header = 'Project 1';
        break;
      case 'project 2':
        header = 'Project 2';
        break;
      case 'project 3':
        header = 'Project 3';
        break;
      default:
        break;
    }
    return (
      <h1
        key={state}
        css={css`
          margin-bottom: 40px;
          text-align: center;
        `}
      >{ header }</h1>
    );
  },

  imageContainer: index => {
    const arr = [];
    for (let i = 0; i < index; i++) {
      const test =
        <div
          key={i+1}
          className={`image ${i+1}`}
          css={css`
            ${border}
            width: 200px;
            height: 300px;
          `}
        >{`img ${i}`}</div>;
      arr.push(test);
    }
    return (
      <div
        className="image-container"
        css={css`
          margin: 40px 0;
          // ${border}
          ${flex.horizontal.center}
        `}
      >
        {arr}
      </div>
    );
  },

  iconContainer: index => {
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
              width: 30px;
              height: 30px;
            `}
          />
        </div>;
      arr.push(test);
    }
    return (
      <div
        className="icon-container"
        css={css`
          margin: 40px 0;
          // ${border}
          ${flex.horizontal.center}
        `}
      >
        {arr}
      </div>
    );
  },

  debouncer: (func, wait = 14, immediate = true) => {
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
  }
}

export default tools;