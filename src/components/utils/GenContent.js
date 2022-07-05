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
        margin: 2.5rem auto;
        ${mediaQuery.setMobile} {
          margin: 1.25rem auto;
        }
        ${flex.vertical}
        min-width: 15rem;
        width: 50%;
        position: relative;
        -webkit-transition: all 2.5s;
        -o-transition: all 2.5s;
        transition: all 2.5s;

        p {
          margin: 0.625rem 0;
        }
      `}
    >
      {target.map((data, i) => <p key={i}>{object[data]}</p>)}
    </article>
  );
};

export default React.memo(GenContent);