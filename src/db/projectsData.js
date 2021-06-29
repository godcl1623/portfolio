import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, border } from '../styles/presets';

// 이미지는 여러 장이 있을 경우 슬라이드쇼 적용 예정
// 슬라이드쇼는 active 상태의 이미지가 display none이 아닌 형식으로 구현
export const imageContainer = index => {
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
        ${border}
        ${flex.horizontal.center}
      `}
    >
      {arr}
    </div>
  );
};

export const iconContainer = index => {
  const arr = [];
  for (let i = 0; i < index; i++) {
    const test =
      <div
        key={i+1}
        className={`image ${i+1}`}
        css={css`
          margin: 0 10px;
          ${border}
          width: 50px;
          height: 50px;
        `}
      >{`icon ${i}`}</div>;
    arr.push(test);
  }
  return (
    <div
      className="icon-container"
      css={css`
        margin: 40px 0;
        ${border}
        ${flex.horizontal.center}
      `}
    >
      {arr}
    </div>
  );
};

export const projectComment = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sollicitudin nulla. Phasellus ac arcu massa. Duis sed rhoncus nisl. Curabitur tempus turpis quis sapien egestas, ut aliquam ipsum feugiat. Ut aliquam maximus risus, in vestibulum arcu. Nullam ac ex laoreet, commodo sapien eu, finibus metus. Nullam facilisis massa ac iaculis porta. Vestibulum commodo lectus ac nisi bibendum, non egestas tortor vulputate. Vestibulum orci ligula, laoreet eget rutrum et, ultricies pharetra erat.

Mauris euismod fringilla tellus vel posuere. Sed ante sem, consequat finibus venenatis a, faucibus eu erat. Donec maximus sit amet dolor nec euismod. Donec consectetur in metus quis convallis. In non tempus nunc. Phasellus ornare luctus ipsum pretium venenatis. Sed iaculis malesuada pulvinar. Phasellus porttitor varius orci, vel finibus nulla facilisis eget. Nullam ac dolor non lectus sodales posuere ut in nisl. Donec pretium risus eget risus fringilla, a pellentesque dui lobortis. Vivamus varius magna diam, non pulvinar neque efficitur in. Proin convallis fringilla mauris, vel volutpat ex consequat quis. Proin ut rutrum velit. Fusce vehicula mauris eu neque finibus, sed congue justo hendrerit. Integer in mauris nulla. Cras pharetra nulla diam, sed venenatis ipsum sollicitudin id.

Donec sollicitudin ultricies ante, eu bibendum arcu viverra id. Praesent eget mollis enim. Integer ut urna sit amet augue sagittis bibendum non sed dolor. Mauris ipsum nisi, cursus sed dui sed, elementum tempus mauris. Pellentesque et est non mi porttitor ultricies. Vivamus faucibus quis magna sed tempus. Praesent tempus ipsum mauris, non malesuada turpis lacinia ut. Nullam sit amet mattis ex, vel auctor nunc. Suspendisse molestie diam nisl, vitae egestas mi fringilla vitae.`;