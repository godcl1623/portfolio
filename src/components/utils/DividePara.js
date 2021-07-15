import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const DividePara = ({ paragraphs, projects }) => {
  const dividedPara = paragraphs.split('\n');

  const changeStyle = () => {
    if (projects) {
      return `
        padding: 0 10%;
        @media (max-width: 1200px) {
          padding: 0 7%;
        }
        @media (max-width: 600px) {
          padding: 0;
        }
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
        `}
      >{paragraph}</p>
    );
  });
};

export default DividePara;