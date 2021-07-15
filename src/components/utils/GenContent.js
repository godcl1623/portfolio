import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { flex, mediaQuery } from '../../styles/presets';

const GenContent = ({ object }) => {
  if (object === undefined) {
    return <React.Fragment />;
  }

  const target = Object.keys(object);

  return (
    <article
      css={css`
        margin: 40px auto;
        ${mediaQuery.setMobile} {
          margin: 20px auto;
        }
        ${flex.vertical}
        min-width: 240px;
        width: 50%;
        position: relative;
        transition: all 2.5s;

        p {
          margin: 10px 0;
        }
      `}
    >
      {target.map((data, i) => <p key={i}>{object[data]}</p>)}
    </article>
  );
};

export default GenContent;