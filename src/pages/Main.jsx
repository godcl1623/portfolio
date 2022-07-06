import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */

import Modal from '../components/modal/Modal';
import Contact from '../components/modal/contact/Contact';
import HeaderLogo from '../components/main/subcomps/HeaderLogo';
import IntroTyping from '../components/main/subcomps/IntroTyping';

import { setModalState, setIsChanged } from '../slices';
import useDelayedNavigate from '../hooks/useDelayedNavigate';
import { DEFAULT_DELAY_TIME } from '../common/constants';
import { isFrontBiggerThanBack } from '../common/capsuledConditions';

import { A, Button } from '../styles/elementsPreset';
import { mainDivStyle, hrStyle, menuStyle } from '../components/main/style/mainStyle';

function Main() {
  const modalState = useSelector(state => state.sliceReducers.modalState);
  const isChangeDetected = useSelector(state => state.sliceReducers.isChangeDetected);

  const dispatch = useDispatch();

  const introRef = useRef();
  const mainRef = useRef();

  const delayedNavigate = useDelayedNavigate();

  const content = '프론트엔드 개발자를 희망하는 이치행의 포트폴리오입니다. ';
  const buttonTexts = ['about', 'works'];

  useEffect(() => {
    const fadeIn = setTimeout(() => {
      mainRef.current.style.opacity = '100%';
    }, DEFAULT_DELAY_TIME);
    return () => clearTimeout(fadeIn);
  }, []);

  useEffect(() => {
    let index = 0;
    const introText = introRef.current;
    const typing = () => {
      introText.textContent += content[index];
      index += 1;
      if (isFrontBiggerThanBack(index, content.length - 1)) {
        index = 0;
        clearInterval(timerId);
      }
    };
    const timerId = setInterval(typing, DEFAULT_DELAY_TIME - 100);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    dispatch(setIsChanged(false));
  }, []);

  function handleClick(event) {
    const clickedTgt = event.currentTarget;
    const destination = clickedTgt.classList[0];
    dispatch(setIsChanged(true));
    delayedNavigate(destination);
  }

  function onClickOpenModal(event) {
    dispatch(setModalState(true));
  }

  function changeState(boolean) {
    dispatch(setModalState(boolean));
  }

  return (
    <div className="Main" ref={mainRef} css={mainDivStyle(isChangeDetected)}>
      <HeaderLogo />
      <hr css={hrStyle} />
      <IntroTyping ref={introRef} />
      <div className="menu" css={menuStyle}>
        <div className="btn-container-1">
          {buttonTexts.map((text, index) => (
            <Button className={text} onClick={handleClick} key={`${text}_${index}`}>
              {text.toUpperCase()}
            </Button>
          ))}
        </div>
        <div className="btn-container-2">
          <A href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">
            GITHUB
          </A>
          <Button className="contact" onClick={onClickOpenModal}>
            CONTACT
          </Button>
        </div>
      </div>
      <Modal modalState={modalState} changeState={changeState} componentInDisplay={<Contact />} />
    </div>
  );
}

export default Main;
