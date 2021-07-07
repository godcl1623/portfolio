/* Dependencies */
// libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
// modules
// module for importing components(컴포넌트 import용 모듈)
import lists from '../modules/componentslist';
import { sizes, flex } from '../styles/presets';

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
        h1 {
          font-weight: bolder;
          font-size: 60px;
        }
        h2 {
          font-weight: bolder;
          font-size: 30px;
        }
        h3 {
          font-weight: bolder;
          font-size: 24px;
        }
        p, button, a {
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: bold;
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