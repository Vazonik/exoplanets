import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Error404 from '../pages/Error404';
import MainPage from '../pages/MainPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={Error404} />
      </Switch>
    </HashRouter>
  );
}

export default App;
