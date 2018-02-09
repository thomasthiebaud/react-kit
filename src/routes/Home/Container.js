import { connect } from 'react-redux'

import Home from './Home'
import state from '../../state'
import reducer from './reducer'
import sagas from './sagas'
import { computeGreetings } from './selectors'

state.injectReducer('home', reducer)
state.injectSagas(sagas)

const mapDispatchToProps = dispatch => ({
  getGreetings: () => dispatch({ type: 'GET_GREETINGS_REQUESTED' }),
})

const mapStateToProps = s => ({
  greetings: computeGreetings(s),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
