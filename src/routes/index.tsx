import * as React from 'react'

import { hot } from 'react-hot-loader'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'

const routes = [{
  component: Home,
}]

const Router = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default hot(module)(Router)
