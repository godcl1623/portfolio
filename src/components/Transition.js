import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, useLocation } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Works from './Works';
import Common from './Common';

const Transition = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname}>
        <Switch location={location}>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
          <Route path="/common" exazct component={Common} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;