import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { flex, animations, sizes } from '../../styles/presets';

const GenContent = ({ object }) => {
  if (object === undefined) {
    return <React.Fragment />;
  }

  const target = Object.keys(object);

  return (
    <article
      css={css`
        margin: 40px auto;
        ${flex.vertical}
        ${sizes.free('300px')};
        position: relative;
        transition: all 2.5s;
        ${animations.goingUp};

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