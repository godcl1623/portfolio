import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const DividePara = ({ paragraphs, fold, spread }) => {
  const dividedPara = paragraphs.split('\n');

  const changeStyle = () => {
    if (fold) {
      if (!spread) {
        return `
          opacity: 0;
          font-size: 0.1px;
          position: absolute;
        `;
      } 
        return `
          opacity: 100%;
          font-size: 16px;
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