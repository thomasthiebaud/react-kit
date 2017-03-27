import state from 'state'
import reducer from './reducer'

export default () => {
  state.injectReducer('home', reducer)

  return System.import('./Container')
}
