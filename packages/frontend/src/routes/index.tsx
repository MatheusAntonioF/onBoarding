import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { SignIn } from '../pages/index';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
