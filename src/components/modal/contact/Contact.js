/* Dependencies */
// Libraries
import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MdSend } from "react-icons/md";
import { flex } from '../../../styles/presets';
import { Button } from '../../../styles/elementsPreset';

const Contact = () => (
  <div
    className="contact"
    css={css`
      ${flex.vertical}
      width: 100%;
      height: 100%;
    `}
  >
    <h1>CONTACT</h1>
    <hr
      css={css`
        margin: 2% 0 4%;
        border: 3px solid black;
        width: 50%;
      `}
    />
    <p
      css={css`
        font-size: 20px;
      `}
    >EMAIL: godcl1623@gmail.com</p>
    <a
      href="mailto:godcl1623@gmail.com"
      css={css`
        all: unset;
        width: 40%;
        ${flex.horizontal.center}
      `}
    >
      <Button
        css={css`
          margin: 8% 0;
          padding: 3% 4%;
          ${flex.horizontal.center}
          // border: 1px solid transparent;
          // border-radius: 5px;
          font-size: 22px;
        `}
      >
        <MdSend />
        {`SEND EMAIL`}
      </Button>
    </a>
  </div>
);

export default Contact;