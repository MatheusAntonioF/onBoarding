import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { SignIn } from '../pages/index';

import Layout from '../components/Layout';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={SignIn} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
