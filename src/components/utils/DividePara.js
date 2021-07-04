import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const DividePara = ({ paragraphs }) => {
  const dividedPara = paragraphs.split('\n');

  return dividedPara.map(paragraph => {
    if (paragraph === '') return;
    return (
      <p
        key={paragraph}
        css={css`
          margin-top: 10px;
        `}
      >{paragraph}</p>
    );
  });
};

export default DividePara;