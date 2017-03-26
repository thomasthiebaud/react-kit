import React from 'react'
import Route from 'react-router-dom/Route'

import LazilyLoad from './LazilyLoad'

const AsyncRoute = route => (
  <Route
    path={route.path}
    render={props => (
      <LazilyLoad render={route.component} >
        {Component => (
          <Component {...props} routes={route.routes} />
        )}
      </LazilyLoad>
    )}
  />
)

export default AsyncRoute
