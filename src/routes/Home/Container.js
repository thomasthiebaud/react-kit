import connect from 'react-redux/lib/connect/connect'

import Home from './Home'
import { computeGreetings } from './selectors'

const mapStateToProps = (state) => ({
  greetings: computeGreetings(state),
})

export default connect(mapStateToProps)(Home)
