import React from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { MdSend } from 'react-icons/md';

import { Button } from 'styles/elementsPreset';
import * as contactStyles from './style/contactStyle';

const Contact = () => {
  const modalState = useSelector(({ sliceReducers }) => sliceReducers.modalState);

  return (
    <div
      className="contact"
      css={contactContainerStyle(modalState)}
    >
      <h1>CONTACT</h1>
      <hr
        css={contactHrStyle}
      />
      <p>EMAIL: godcl1623@gmail.com</p>
      <a
        href="mailto:godcl1623@gmail.com"
        css={mailButtonStyle}
      >
        <Button
          css={sendMailButtonStyle}
        >
          <MdSend />
          {`SEND EMAIL`}
        </Button>
      </a>
    </div>
  );
};

export default Contact;

const { contactContainerStyle, contactHrStyle, mailButtonStyle, sendMailButtonStyle } =
  contactStyles;
