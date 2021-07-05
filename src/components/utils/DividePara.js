import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const DividePara = ({ paragraphs, fold }) => {
  const dividedPara = paragraphs.split('\n');

  const changeStyle = () => {
    if (fold) {
      return `
        // opacity: 0;
        display: none;
        font-size: 0.1px;
        position: absolute;
        max-width: 100%;
        max-height: 100%;
      `;
    }
  };

  return dividedPara.map((paragraph, i) => {
    if (paragraph === '') return;
    return (
      <p
        key={`para ${i}`}
        css={css`
          margin-top: 10px;
        `}
      >{paragraph}</p>
    );
  });
};

export default DividePara;