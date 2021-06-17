import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import lists from './modules/componentslist';

const { Main, About, Works } = lists;

const App = () => (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/contact" exact component={About} />
            <Route path="/about" exact component={About} />
            <Route path="/works" exact component={Works} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );

export default App;