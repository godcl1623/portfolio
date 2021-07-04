import React from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { flex, sizes } from '../styles/presets';
import { A, Button } from '../styles/elementsPreset';

const MainContent = props => {
  const selectedMenu = useSelector(state => state.selectedMenu);

  return (
    <div
      className="Main"
      css={css`
        ${flex.vertical};
        ${sizes.full}
        position: relative;
        transition: all 1s;
        opacity: ${selectedMenu !== '' ? '0' : '100%'};

        * {
          margin: 20px;
        }

        @keyframes blink-effect {
          50% {
            opacity: 0;
          }
        }

        .typing_cursor {
          margin: 0;
          border: 1px solid black;
          width: 2.5px;
          height: 18px;
          background-color: black;
          animation: blink-effect 1s step-end infinite;
          display: inline-block;
        }
      `}
      >
      <div
        className="header-container"
        css={css`
          border-radius: 15px;
          ${flex.vertical};
          width: 375px;
          height: 250px;
          background-color: black;
          color: white;
        `}
      >
        <h1>LCH</h1>
        <h2>PORTFOLIO</h2>
      </div>
      <hr
        css={css`
          margin: 30px 0;
          width: 35%;
        `}
      />
      <section
        css={css`
          ${flex.horizontal.center}
        
          p {
            margin-right: 3px;
          }
        `}
        >
        <p className="intro">　</p>
        <span className="typing_cursor"></span>
      </section>
      <div className="menu">
        <Button
          ref={props.foo}
          css={css`
            position: absolute;
            transition: all 1s;
            top: ${props.top}px;
            left: ${props.left}px;
          `}
        >ABOUT</Button>
        <Button

        >WORKS</Button>
        <A>GITHUB</A>
        <A>BLOG</A>
        <Button>CONTACT</Button>
      </div>
    </div>
  );
};

export default MainContent;