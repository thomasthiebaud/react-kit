import React from 'react'

import BrowserRouter from 'react-router-dom/BrowserRouter'
import Switch from 'react-router-dom/Switch'

import AsyncRoute from 'components/AsyncRoute'

import Home from './Home'

const routes = [{
  path: '/',
  component: Home,
}]

export const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <AsyncRoute key={route.path} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
)

export default Router
