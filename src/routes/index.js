import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader';

import Home from './Home';

const routes = [
  {
    component: Home,
  },
];

const Router = () => <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;

export default hot(module)(Router);
