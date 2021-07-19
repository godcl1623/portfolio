/* ***** Dependencies ***** */
// libraries
import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// components
import Modal from '../modal/Modal';
import Contact from '../modal/contact/Contact';
// action creators
import {
  modalHandlerCreator,
  selectedMenuCreator,
  changeDetectedCreator,
  isReadyToMoveCreator,
  isTransitionEndCreator
} from '../../actions';
// modules
import { A, Button } from '../../styles/elementsPreset';
import { flex, mediaQuery } from '../../styles/presets';

/* ***** Component Body ***** */
const Main = () => {
  // States
  const modalState = useSelector(state => state.modalState);
  const selectedMenu = useSelector(state => state.selectedMenu);
  const isChangeDetected = useSelector(state => state.isChangeDetected);
  // redux - dispatch
  const dispatch = useDispatch();
  // refs
  const target = useRef();
  const about = useRef();
  const works = useRef();
  const main = useRef();
  // react-router-dom
  const location = useLocation();
  const history = useHistory();
  // etc.
  const content = '프론트엔드 개발자를 희망하는 이치행의 포트폴리오입니다. ';

  // Init Fade-in
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const fadeIn = setTimeout(() => {
      main.current.style.opacity = '100%';
    }, 300);
    return () => clearTimeout(fadeIn);
  }, [])

  // Init Typing Effect
  useEffect(() => {
    let index = 0;
    const introText = document.querySelector('.intro');
    if (introText) {
      const typing = () => {
        introText.textContent += content[index];
        index += 1;
        if (index > content.length - 1) {
          return setTimeout(() => {
            index = 0;
            clearInterval(timerId);
          }, 190);
        }
      };
      const timerId = setInterval(typing, 200);
      return () => {
        clearInterval(timerId);
        clearTimeout(typing);
      };
    }
  }, [selectedMenu]);

  // Init redux store
  useEffect(() => {
    if (location.pathname === '/' && selectedMenu !== '') {
      dispatch(selectedMenuCreator(''));
    }
    dispatch(isTransitionEndCreator(false));
    dispatch(isReadyToMoveCreator(false));
    dispatch(changeDetectedCreator(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="Main"
      ref={main}
      css={css`
        ${flex.vertical};
        width: 100%;
        height: 100%;
        position: relative;
        opacity: 0;
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;

        *:not(.header-container *, .intro, .menu *) {
          margin: 1.25rem;
        }

        @media (max-height: 449px) {
          *:not(.header-container *, .intro, .menu *) {
            margin: 0.625rem;
          }
        }

        @-webkit-keyframes blink-effect {
          50% {
            opacity: 0;
          }
        }

        @keyframes blink-effect {
          50% {
            opacity: 0;
          }
        }

        .typing_cursor {
          margin: 0;
          border: 0.063rem solid var(--point-dark);
          width: 0.156rem;
          height: 1.125rem;
          background-color: var(--point-dark);
          -webkit-animation: blink-effect 1s step-end infinite;
                  animation: blink-effect 1s step-end infinite;
          display: inline-block;
        }

        .header-container, hr, section, a, button {
          opacity: ${isChangeDetected ? '0' : '100%'};
          -webkit-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        }
      `}
    >
      <div
        className="header-container"
        css={css`
          border-radius: 0.938rem;
          ${flex.vertical};
          min-width: 13.125rem;
          min-height: 8.75rem;
          width: 25vw;
          height: 17vw;
          background-color: var(--point-dark);
          color: var(--white);
          h1, h2, h3 {
            color: var(--white);
          }
        `}
      >
        <h1
          css={css`
            margin: 0;
            font-size: calc(14vw*0.45);
            line-height: 0.9;
            ${mediaQuery.setMobile} {
              font-size: 2.375rem;
            }
          `}
        >LCH</h1>
        <h2
          css={css`
            margin: 0;
            font-size: calc(14vw*0.2);
            text-align: center;
            ${mediaQuery.setMobile} {
              font-size: 1.063rem;
            }
          `}
        >
          FRONTEND
        </h2>
        <h2
          css={css`
            margin: 0;
            font-size: calc(14vw*0.2);
            text-align: center;
            ${mediaQuery.setMobile} {
              font-size: 1.063rem;
            }
          `}
        >PORTFOLIO</h2>
      </div>
      <hr
        css={css`
          border-color: var(--point-main);
          margin: 2% 0;
          width: 35%;
          @media (max-width: 900px) {
            width: 40%;
          }
          @media (max-width: 600px) {
            width: 45%;
          }
        `}
      />
      <section
        css={css`
          ${flex.horizontal.center}
        
          p {
            margin-right: 0.188rem;
          }
        `}
        >
        <p
          className="intro"
          ref={target}
          css={css`
            color: var(--point-dark);
            @media (max-width: 600px) {
              font-size: 0.75rem;
            }
          `}
        >　</p>
        <span className="typing_cursor"></span>
      </section>
      <div
        className="menu"
        css={css`
          ${flex.horizontal.center}
          ${mediaQuery.setMobile} {
            ${flex.vertical}
            width: 100%;
          }
          button, a {
            margin: 1.25rem 0.625rem;
            ${mediaQuery.setMobile} {
              margin: 0.625rem;
              margin-bottom: 1.25rem;
              width: 6.25rem;
              text-align: center;
            }
          }
        `}
      >
        <div
          className="btn-container-1"
        >
          <Button
          className="about"
            ref={about}
            onClick={() => {
                dispatch(changeDetectedCreator(true));
                setTimeout(() => history.push('/about'), 301);
              }
            }
          >ABOUT</Button>
          <Button
            className="works"
            ref={works}
            onClick={() => {
                dispatch(changeDetectedCreator(true));
                setTimeout(() => history.push('/works'), 301);
              }
            }
          >WORKS</Button>
        </div>
        <div
          className="btn-container-2"
        >
          <A
            href="https://github.com/godcl1623"
            target="_blank"
            rel="noreferrer noopener"
          >GITHUB</A>
          <A
            href="https://godcl1623.tistory.com/"
            target="_blank"
            rel="noreferrer noopener"
          >BLOG</A>
        </div>
        <Button
          className="contact"
          onClick={() => dispatch(modalHandlerCreator(true))}
        >CONTACT</Button>
      </div>
      <Modal
        modalState={modalState}
        changeState={boolean => dispatch(modalHandlerCreator(boolean))}
        componentInDisplay={Contact}
      />
    </div>
  );
};

export default Main;