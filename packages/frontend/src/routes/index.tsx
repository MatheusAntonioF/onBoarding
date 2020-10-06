import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import { SignIn, Profile } from '../pages/index';

import Layout from '../components/Layout';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/create-profile" component={Profile} isPrivate />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
