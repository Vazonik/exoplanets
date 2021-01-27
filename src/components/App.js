import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Error404 from '../pages/Error404';
import MainPage from '../pages/MainPage';
import Chart from '../pages/Chart';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/chart" component={Chart} />
        <Route component={Error404} />
      </Switch>
    </HashRouter>
  );
}

export default App;
