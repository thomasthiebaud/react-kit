import React from 'react'
import Loadable from 'react-loadable'

import state from 'state'

import sagas from './sagas'
import reducer from './reducer'

export default Loadable({
  loader: () => System.import('./Container'),
  loading () {
    return <div>Loading...</div>
  },
  render (loaded, props) {
    const Component = loaded.default

    state.injectReducer('home', reducer)
    state.injectSagas(sagas)

    return <Component {...props} />
  },
})
