import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { isTransitionEndCreator, isReadyToMoveCreator } from '../../actions';
import { Div } from '../../styles/elementsPreset';
import { mediaQuery } from '../../styles/presets';

const Moveto = props => {
  const transitionStatus = useSelector(state => state.isTransitionEnd);
  const isReadyToMove = useSelector(state => state.isReadyToMove);
  const selectedMenu = useSelector(state => state.selectedMenu);
  const dispatch = useDispatch();

  const test = useRef();
  
  const history = useHistory();
  
  useEffect(() => {
    const leftCoord = window.innerWidth * 0.5 - test.current.offsetLeft;
    const topCoord = window.innerHeight * 0.5 - test.current.offsetTop;
    const initialStyleChange = setTimeout(() => {
      test.current.style.fontFamily = 'Gothic A1';
      test.current.style.webkitTransform = `translate(calc(${leftCoord}px - 50% - var(--h1)), calc(${topCoord}px - 50%))`;
      test.current.style.transform = `translate(calc(${leftCoord}px - 50%), calc(${topCoord}px - 50%))`;
      // test.current.style.top = '50%';
      // test.current.style.left = '50%';
      // test.current.style.webkitTransform = 'translate(-50%, -50%)';
      // test.current.style.msTransform = 'translate(-50%, -50%)';
      // test.current.style.transform = 'translate(-50%, -50%)';
      setTimeout(() => dispatch(isTransitionEndCreator(true)), 1005);
    }, 100);
    return () => clearTimeout(initialStyleChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const leftCoord = window.innerWidth * 0.5 - test.current.offsetLeft;
    const topCoord = window.innerHeight * 0.5 - test.current.offsetTop;
    if (transitionStatus) {
      // test.current.style.fontSize = 'var(--h1)';
      test.current.style.webkitTransform = `translate(calc(${leftCoord}px - 50%), calc(${topCoord - window.innerHeight * 0.5 }px + 50%))`;
      test.current.style.transform = `translate(calc(${leftCoord}px - 50%), calc(${topCoord - window.innerHeight * 0.5 }px + 50%))`;
      test.current.style.boxShadow = '0 0 10px 10px var(--box-shadow)';
      test.current.style.width = '80%';
      // test.current.style.webkitAnimation = 'grow 1s forwards';
      // test.current.style.animation = 'grow 1s forwards';
      setTimeout(() => dispatch(isReadyToMoveCreator(true)), 1005);
      setTimeout(() => dispatch(isTransitionEndCreator(false)), 1005);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionStatus]);

  useEffect(() => {
    if (isReadyToMove) {
      dispatch(isTransitionEndCreator(false));
      dispatch(isReadyToMoveCreator(false));
      history.push(selectedMenu === 'ABOUT' ? '/about' : '/works');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReadyToMove]);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <Div
        ref={test}
        css={css`
          max-width: 1920px;
          ${mediaQuery.setMobile} {
            min-width: 100px;
          }
          position: absolute;
          display: inline-block;
          top: ${props.offsetTop}px;
          left: ${props.offsetLeft}px;
          transition: all 1s;
          // font-size: var(--h1);
          // transform: scale(0.5);

          @keyframes grow {
            from {
              width: 179px;
            }
            to {
              width: 80%;
              box-shadow: 0 0 10px 10px var(--box-shadow);
            }
          }

          @media (max-width: 899px) {
            @keyframes grow {
              from {
                width: 179px;
              }
              to {
                width: 100%;
                box-shadow: 0 0 10px 10px var(--box-shadow);
                top: 60px;
              }
            }
          }
        `}
      >{ selectedMenu }</Div>
    </div>
  );
};

export default Moveto;