import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { isTransitionEndCreator, isReadyToMoveCreator } from '../actions';
import { Button } from '../styles/elementsPreset';

const Moveto = props => {
  const transitionStatus = useSelector(state => state.isTransitionEnd);
  const isReadyToMove = useSelector(state => state.isReadyToMove);
  const dispatch = useDispatch();

  const test = useRef();

  const history = useHistory();

  useEffect(() => {
    const initialStyleChange = setTimeout(() => {
      test.current.style.fontFamily = 'Gothic A1';
      test.current.style.top = '50%';
      test.current.style.left = '50%';
      test.current.style.transform = 'translate(-50%, -50%)';
      test.current.style.backgroundColor = 'transparent';
      test.current.style.border = 'none';
      test.current.style.boxShadow = 'none';
      test.current.style.fontSize = '50px';
      setTimeout(() => dispatch(isTransitionEndCreator(true)), 1005);
    }, 300);
    return () => clearTimeout(initialStyleChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (transitionStatus) {
      test.current.style.top = '53px';
      setTimeout(() => dispatch(isReadyToMoveCreator(true)), 1005);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionStatus]);

  useEffect(() => {
    if (isReadyToMove) {
      dispatch(isTransitionEndCreator(false));
      dispatch(isReadyToMoveCreator(false));
      history.push('/about');
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
          position: absolute;
          top: ${props.offsetTop + 73.6}px;
          left: ${props.offsetLeft}px;
          transition: all 1s;
        `}
      >ABOUT</Button>
    </div>
  );
};

export default Moveto;