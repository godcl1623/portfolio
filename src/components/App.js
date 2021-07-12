/* Dependencies */
// libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
// modules
// module for importing components(컴포넌트 import용 모듈)
import lists from '../modules/componentslist';
import { sizes, flex, mediaQuery } from '../styles/presets';

const { Main, About, Works, Common } = lists;

// Component Body
const App = () => (
  <div className="App">
    <Global
      styles={css`
        * {
          margin: 0;
          // 임시
          // border: 1px solid black;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Gothic A1', sans-serif;
          -ms-overflow-style: none;
          scrollbar-width: none;
          list-style: none;
          z-index: 1;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        html, body, #root, .App, #modal {
          ${sizes.full};
        }
        html {
          background-color: skyblue;
          min-height: 100vh;
          height: auto;
          // height: 100vh;
          ${flex.vertical}
          position: relative;
        }
        ${mediaQuery.setMobile} {
          :root {
            --h1: 35px;
            --h2: 18px;
            --h3: 14px;
            --p: 13px;
            --a: 13px;
            --btn: 13px;
            --btnWithSvg: 1.5vw;
            --margin-left: 0;
            --margin-bottom: 0;
            --padding: 30px;
            --background-width: 100%;
          }
        }
        ${mediaQuery.setMq[0]} {
          :root {
            --h1: 40px;
            --h2: 20px;
            --h3: 16px;
            --p: 14px;
            --a: 14px;
            --btn: 14px;
            --btnWithSvg: 1.5vw;
            --margin-left: 3px;
            --margin-bottom: 3px;
            --padding: 40px;
            --background-width: 100%;
          }
        }
        ${mediaQuery.setMq[1]} {
          :root {
            --h1: 64px;
            --h2: 32px;
            --h3: 26px;
            --p: 16px;
            --a: 16px;
            --btn: 16px;
            --btnWithSvg: 1.5vw;
            --margin-left: 5px;
            --margin-bottom: 5px;
            --padding: 50px;
            --background-width: 80%;
          }
        }
        ${mediaQuery.setMq[2]} {
          :root {
            --h1: 64px;
            --h2: 32px;
            --h3: 26px;
            --p: 16px;
            --a: 16px;
            --btn: 16px;
            --btnWithSvg: 1.3vw;
            --margin-left: 7px;
            --margin-bottom: 7px;
            --padding: 50px;
            --background-width: 80%;
          }
        }
        ${mediaQuery.setMq[3]} {
          :root {
            --h1: 80px;
            --h2: 40px;
            --h3: 32px;
            --p: 20px;
            --a: 20px;
            --btn: 20px;
            --btnWithSvg: 1.3vw;
            --margin-left: 7px;
            --margin-bottom: 7px;
            --padding: 60px;
            --background-width: 80%;
          }
        }
        ${mediaQuery.setMq[4]} {
          :root {
            --h1: 96px;
            --h2: 48px;
            --h3: 38px;
            --p: 24px;
            --a: 24px;
            --btn: 24px;
            --btnWithSvg: 1.2vw;
            --margin-left: 7px;
            --margin-bottom: 7px;
            --padding: 60px;
            --background-width: 80%;
          }
        }
        h1 {
          font-weight: bolder;
          font-size: var(--h1);
        }
        h2 {
          font-weight: bolder;
          font-size: var(--h2);
        }
        h3 {
          font-weight: bolder;
          font-size: var(--h3);
        }
        p, button, a {
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: bold;
          font-size: var(--p);
          :disabled {
            color: black;
            border: 1px solid transparent;
            background-color: white;
          }
        }
        img {
          width: 50px;
          height: 50px;
        }
      `}
    />
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
          <Route path="/common" exazct component={Common} />
        </Switch>
    </BrowserRouter>
  </div>
);

export default App;