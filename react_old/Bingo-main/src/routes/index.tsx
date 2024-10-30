import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Bingo from '../pages/Bingo';
import List from '../pages/List';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Bingo} />
      <Route path="/home" component={Bingo} />
      <Route path="/list" component={List} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
