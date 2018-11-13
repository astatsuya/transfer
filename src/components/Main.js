/* global App, PageContents */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/pagecontents" component={PageContents} />
    </Switch>
  </main>
);

export default Main;
