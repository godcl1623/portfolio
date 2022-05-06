import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { setIsTransitionEnd, setIsReadyToMove } from '../../slices';
import { Button } from '../../styles/elementsPreset';
import { mediaQuery } from '../../styles/presets';

const Moveto = props => {
  const transitionStatus = useSelector(state => state.sliceReducers.isTransitionEnd);
  const isReadyToMove = useSelector(state => state.sliceReducers.isReadyToMove);
  const selectedMenu = useSelector(state => state.sliceReducers.selectedMenu);
  const dispatch = useDispatch();

  const test = useRef();

  const history = useHistory();

  useEffect(() => {
    const initialStyleChange = setTimeout(() => {
      test.current.style.fontFamily = 'Gothic A1';
      test.current.style.top = '50%';
      test.current.style.left = '50%';
      test.current.style.webkitTransform = 'translate(-50%, -50%)';
      test.current.style.msTransform = 'translate(-50%, -50%)';
      test.current.style.transform = 'translate(-50%, -50%)';
      test.current.style.fontSize = '50px';
      setTimeout(() => dispatch(setIsTransitionEnd(true)), 1005);
    }, 100);
    return () => clearTimeout(initialStyleChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (transitionStatus) {
      test.current.style.webkitAnimation = 'grow 0.5s forwards';
      test.current.style.animation = 'grow 0.5s forwards';
      test.current.style.top = '80px';
      setTimeout(() => dispatch(setIsReadyToMove(true)), 1005);
      setTimeout(() => dispatch(setIsTransitionEnd(false)), 1005);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionStatus]);

  useEffect(() => {
    if (isReadyToMove) {
      dispatch(setIsTransitionEnd(false));
      dispatch(setIsReadyToMove(false));
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
      <Button
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

          @keyframes grow {
            from {
              width: 179px;
            }
            to {
              width: 80%;
            }
          }

          @media (max-width: 899px) {
            @keyframes grow {
              from {
                width: 179px;
              }
              to {
                width: 100%;
              }
            }
          }
        `}
      >{ selectedMenu }</Button>
    </div>
  );
};

export default Moveto;