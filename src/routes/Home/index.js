import state from 'state'

import sagas from './sagas'
import reducer from './reducer'

export default () => {
  state.injectReducer('home', reducer)
  state.injectSagas(sagas)

  return System.import('./Container')
}
