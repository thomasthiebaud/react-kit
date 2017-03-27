import connect from 'react-redux/lib/connect/connect'

import Home from './Home'
import { computeGreetings } from './selectors'

const mapDispatchToProps = dispatch => ({
  getGreetings: () => dispatch({ type: 'GET_GREETINGS_REQUESTED' }),
})

const mapStateToProps = state => ({
  greetings: computeGreetings(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
