import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Account from './Account';
import About from './About';

export default (
  <Route path="/" component={ App }>
    <Route path="/home" component={ Home }/>
    <Route path="/account" component={ Account }/>
    <Route path="/about" component={ About }/>
    <IndexRoute component={ Home } />
  </Route>
);
