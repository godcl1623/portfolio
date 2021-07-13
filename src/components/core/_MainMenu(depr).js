/* Dependencies */
// libraries
import React from 'react';
import { useDispatch } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// action creator
import {
  modalHandlerCreator,
  selectedMenuCreator,
  changeDetectedCreator
} from '../../actions';
// modules
import { mediaQuery } from '../../styles/presets';
import { A, Button } from '../../styles/elementsPreset';

/* Component Body */
const MainMenu = props => {
  // action 업데이트용
  const dispatch = useDispatch();

  const displayMenu = flag => {
    if (flag) {
      return `
        ${mediaQuery.setMobile} {
          display: none;
        }
      `;
    }
  };

  return (
    <div
      className="menu"
      css={css`
        ${displayMenu(props.notForModal)}
        button, a {
          margin: 0 10px;
        }
      `}
    >
      <Button
      className="about"
        ref={props.about}
        onClick={() => {
            dispatch(changeDetectedCreator(true));
            props.works.current.style.opacity = 0;
            setTimeout(() => dispatch(selectedMenuCreator(props.about.current.textContent)), 301);
          }
        }
      >ABOUT</Button>
      <Button
        className="works"
        ref={props.works}
        onClick={() => {
            dispatch(changeDetectedCreator(true));
            props.about.current.style.opacity = 0;
            setTimeout(() => dispatch(selectedMenuCreator(props.works.current.textContent)), 301);
          }
        }
      >WORKS</Button>
      <A href="https://github.com/godcl1623" target="_blank" rel="noreferrer noopener">GITHUB</A>
      <A href="https://godcl1623.tistory.com/" target="_blank" rel="noreferrer noopener">BLOG</A>
      <Button
        className="contact"
        onClick={() => dispatch(modalHandlerCreator(true))}
      >CONTACT</Button>
    </div>
  );
};

export default MainMenu;