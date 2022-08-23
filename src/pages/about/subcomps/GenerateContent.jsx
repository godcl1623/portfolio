import React from 'react';
/** @jsxImportSource @emotion/react */

import contentArticleStyle from '../style/generateContentStyle';

function GenerateContent({ object }) {
  const target = Object.keys(object);

  return (
    <article css={contentArticleStyle}>
      {target.map((data, i) => (
        <p key={`${data}_${i}`}>{object[data]}</p>
      ))}
    </article>
  );
}

export default React.memo(GenerateContent);
