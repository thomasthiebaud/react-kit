import { applyMiddleware, compose, createStore, Middleware, Reducer, Store } from 'redux'
import { SagaIterator, SagaMiddleware, Task } from 'redux-saga'

import createRootReducer from './reducer'
import sagaMiddleware from './saga'

import { ApplicationState } from './app'

type Saga = () => Iterator<any>

export class StateManager {
  public store: Store<ApplicationState>
  private asyncReducers: {
    [key: string]: Reducer<any>,
  } = {}
  private sagas: {
    [key: string]: Task,
  } = {}

  constructor() {
    const middleware = [sagaMiddleware]

    this.store = createStore(
      createRootReducer({}),
      compose(applyMiddleware(...middleware)),
    )
  }

  public injectReducer(key: string, reducer: Reducer<any>) {
    this.asyncReducers[key] = reducer
    this.store.replaceReducer(createRootReducer(this.asyncReducers))
  }

  public injectSaga(saga: Saga) {
    if (saga.toString() in this.sagas) {
      this.sagas[saga.toString()].cancel()
      this.sagas[saga.toString()] = sagaMiddleware.run(saga)
    } else {
      this.sagas[saga.toString()] = sagaMiddleware.run(saga)
    }
  }

  public injectSagas(sagas: Saga[]) {
    sagas.forEach((saga) => this.injectSaga(saga))
  }
}

const stateManager = new StateManager()

export {
  ApplicationState,
  stateManager,
}
