import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import Home from './Home'
import { Action, Type } from './state'

import { ApplicationState, stateManager } from '../../state'

import reducer from './reducer'
import sagas from './sagas'

stateManager.injectReducer('home', reducer)
stateManager.injectSagas(sagas)

const mapStateToProps = (state: ApplicationState) => ({
  features: state.home.features,
  loading: state.home.loading,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  shuffle: () => dispatch({ type: Type.SHUFFLE_REQUESTED }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
