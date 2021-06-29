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
          }
          html, body, #root, .App {
            ${sizes.full};
          }
          html {
            background-color: skyblue;
            min-height: 100%;
            height: auto;
            ${flex.vertical}
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