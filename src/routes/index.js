import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Home from './Home'

const routes = [{
  component: Home,
}]

export const Router = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default Router
