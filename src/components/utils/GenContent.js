/* ***** Dependencies ***** */
// libraries
import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// modules
import { flex, mediaQuery } from '../../styles/presets';

/* ***** Component Body ***** */
const GenContent = ({ object }) => {
  // if no data passed...
  if (object === undefined) {
    return <React.Fragment />;
  }

  // if some data passed...
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