/* ***** Dependencies ***** */
// libraries
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
// modules
import { sizes, flex, mediaQuery } from '../styles/presets';
// components
// import Main from './core/Main';
// import About from './about/About';
// import Works from './works/Works';
const Main = lazy(() => import('./core/Main'));
const About = lazy(() => import('./about/About'));
const Works = lazy(() => import('./works/Works'));

/* ***** Component Body ***** */
const App = () => (
  <div className="App">
    <Global
      styles={css`
        :root {
          --point-dark: #050E27;
          --point-main: #6F81A5;
          --point-light: #ACBDDA;
          --white: #F3F3F4;
          --black: #0A0B0D;
          --box-shadow: rgba(5, 14, 39, 0.3);
        }
        * {
          margin: 0;
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
        html {
          background-color: var(--point-light);
          width: 100%;
          height: 100%;
          position: relative;
        }
        body {
          width: 100%;
          height: 100%;
        }
        .App {
          ${sizes.full}
          ${flex.vertical}
        }
        #root {
          ${sizes.full}
        }
        ${mediaQuery.setMobile} {
          :root {
            --h1: 40px;
            --h2: 18px;
            --h3: 14px;
            --p: 13px;
            --a: 13px;
            --btn: 13px;
            --margin-left: 5px;
            --margin-bottom: 3px;
            --padding: 30px;
            --background-width: 100%;
            --modal-align: space-between;
          }
        }
        ${mediaQuery.setMq[0]} {
          :root {
            --h1: 50px;
            --h2: 20px;
            --h3: 16px;
            --p: 14px;
            --a: 14px;
            --btn: 14px;
            --margin-left: 5px;
            --margin-bottom: 3px;
            --padding: 40px;
            --background-width: 100%;
            --modal-align: space-between;
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
            --margin-left: 5px;
            --margin-bottom: 3px;
            --padding: 50px;
            --background-width: 80%;
            --modal-align: space-between;
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
            --margin-left: 7px;
            --margin-bottom: 5px;
            --padding: 50px;
            --background-width: 80%;
            --modal-align: space-between;
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
            --margin-left: 7px;
            --margin-bottom: 5px;
            --padding: 60px;
            --background-width: 80%;
            --modal-align: center;
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
            --margin-left: 7px;
            --margin-bottom: 5px;
            --padding: 60px;
            --background-width: 80%;
            --modal-align: center;
          }
        }
        h1 {
          font-weight: bolder;
          font-size: var(--h1);
          color: var(--point-dark);
        }
        h2 {
          font-weight: bolder;
          font-size: var(--h2);
          color: var(--point-dark);
        }
        h3 {
          font-weight: bolder;
          font-size: var(--h3);
          color: var(--point-dark);
        }
        p, button, a {
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: bold;
          font-size: var(--p);
          color: var(--point-dark);
          :disabled {
            color: var(--point-dark);
            border: 1px solid transparent;
            background-color: var(--point-light);
          }
        }
        hr {
          border-color: var(--point-main);
        }
        img {
          width: 50px;
          height: 50px;
        }
      `}
    />
    <Suspense fallback={<></>}>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/works" exact component={Works} />
          </Switch>
      </BrowserRouter>
    </Suspense>
  </div>
);

export default App;