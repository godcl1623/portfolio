import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const DividePara = ({ paragraphs, projects }) => {
  const dividedPara = paragraphs.split('\n');

  const changeStyle = () => {
    if (projects) {
      return `
        padding: 0 10%;
        width: 100%;
        height: auto;
        text-align: justify;
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
          ${changeStyle()}
          font-size: 1rem;
        `}
      >{paragraph}</p>
    );
  });
};

export default DividePara;