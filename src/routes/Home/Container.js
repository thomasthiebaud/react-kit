import { connect } from 'react-redux'

import Home from './Home'
import reducer from './reducer'
import sagas from './sagas'
import { computeGreetings } from './selectors'

const mapDispatchToProps = dispatch => ({
  getGreetings: () => dispatch({ type: 'GET_GREETINGS_REQUESTED' }),
})

const mapStateToProps = state => ({
  greetings: computeGreetings(state),
})

export {
  reducer,
  sagas,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
