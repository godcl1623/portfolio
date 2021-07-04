import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const DividePara = ({ paragraphs, fold, spread }) => {
  const dividedPara = paragraphs.split('\n');
  console.log(spread);
  const changeStyle = () => {
    if (fold) {
      return `
        opacity: 0;
        font-size: 0.1px;
        position: absolute;
      `;
    }
  };

  return dividedPara.map(paragraph => {
    if (paragraph === '') return;
    return (
      <p
        key={paragraph}
        css={css`
          margin-top: 10px;
          ${changeStyle()};
        `}
      >{paragraph}</p>
    );
  });
};

export default DividePara;