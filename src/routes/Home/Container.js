import { connect } from 'react-redux'

import Home from './Home'
import state from '../../state'
import reducer from './reducer'
import sagas from './sagas'

state.injectReducer('home', reducer)
state.injectSagas(sagas)

const mapDispatchToProps = dispatch => ({
  shuffle: () => dispatch({ type: 'SHUFFLE-REQUESTED' }),
})

const mapStateToProps = s => ({
  features: s.home.features,
  loading: s.home.loading,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
