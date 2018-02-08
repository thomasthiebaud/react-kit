import { applyMiddleware, compose, createStore } from 'redux'

import createRootReducer from './reducer'
import sagaMiddleware from './saga'

export class State {
  constructor(initialState = {}) {
    const enhancers = []
    const middleware = [sagaMiddleware]

    let composeEnhancers = compose

    if (process.env.NODE_ENV === 'development') {
      const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle,max-len
      if (typeof composeWithDevToolsExtension === 'function') {
        composeEnhancers = composeWithDevToolsExtension
      }
    }

    this.store = createStore(
      () => {}, // No-op root reducer
      initialState,
      composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers
      )
    )
    this.store.asyncReducers = {}
    this.store.sagas = {}
  }

  injectReducer(key, reducer) {
    this.store.asyncReducers[key] = reducer
    this.store.replaceReducer(createRootReducer(this.store.asyncReducers))
  }

  injectSaga(saga) {
    if (saga.name in this.store.sagas) {
      this.store.sagas[saga.name].cancel()
      this.store.sagas[saga.name] = sagaMiddleware.run(saga)
    } else {
      this.store.sagas[saga.name] = sagaMiddleware.run(saga)
    }
  }

  injectSagas(sagas) {
    if (Array.isArray(sagas)) sagas.forEach(saga => this.injectSaga(saga))
    else this.injectSaga(sagas)
  }
}

export default new State()
