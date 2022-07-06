import React from 'react';
/** @jsxImportSource @emotion/react */

import contentArticleStyle from './style/genContentStyle';

function GenContent({ object }) {
  const target = Object.keys(object);

  return (
    <article css={contentArticleStyle}>
      {target.map((data, i) => (
        <p key={`${data}_${i}`}>{object[data]}</p>
      ))}
    </article>
  );
}

export default React.memo(GenContent);
