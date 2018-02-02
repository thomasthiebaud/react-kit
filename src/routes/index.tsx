import * as React from 'react';

import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import { HomeLoadable } from './Home';

const routes = [{
  component: HomeLoadable,
}];

export const Router = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
);

export default Router;
