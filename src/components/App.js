import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// module for importing components(컴포넌트 import용 모듈)
import lists from '../modules/componentslist';

const { Main, About, Works, Common } = lists;

// Component Body
const App = () => (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/works" exact component={Works} />
            <Route path="/common" exazct component={Common} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );

export default App;