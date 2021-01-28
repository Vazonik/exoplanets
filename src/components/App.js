import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import ApiLoader from './ApiLoader/ApiLoader';

import Error404 from '../pages/Error404';
import MainPage from '../pages/MainPage';
import Chart from '../pages/Chart';
import Search from '../pages/Search';
import AboutUs from '../pages/AboutUs';

function App() {
  const [exoplanetsArray, setExoplanetsArray] = React.useState([]);

  const onApiLoaded = data => {
    setExoplanetsArray(data);
  }

  return (
    <HashRouter>
      <ApiLoader onLoad={onApiLoaded} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/chart" render={() => 
          <Chart exoplanets={exoplanetsArray} />
        } />
        <Route exact path="/search" render={() => 
          <Search exoplanets={exoplanetsArray} />
        } />
        <Route exact path="/about-us" component={AboutUs} />
        <Route component={Error404} />
      </Switch>
    </HashRouter>
  );
}

export default App;
