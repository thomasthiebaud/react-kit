import React from 'react'
import Loadable from 'react-loadable'

import state from '../../state'

import reducer from './reducer'
import sagas from './sagas'

export default Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Container'),
  loading() {
    return <div>Loading...</div>
  },
  render(Component, props) {
    state.injectReducer('home', reducer)
    state.injectSagas(sagas)

    return <Component.default {...props} />
  },
})
