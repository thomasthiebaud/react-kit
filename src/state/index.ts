import { applyMiddleware, compose, createStore } from 'redux';

import createRootReducer from './reducer';
import sagaMiddleware from './saga';

declare global {
  interface Window {
    __DEV__: string;
    __PROD__: string;
    __PRELOADED_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    devToolsExtension: Function;
  }
}

export class State {
  public store: any;

  constructor (initialState: any = {}) {
    const enhancers = [];
    const middleware = [sagaMiddleware];

    let composeEnhancers = compose;

    if (window.__DEV__) {
      const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle,max-len
      if (typeof composeWithDevToolsExtension === 'function') {
        composeEnhancers = composeWithDevToolsExtension;
      }
    }

    this.store = createStore(
      createRootReducer({}),
      initialState,
      composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers
      )
    );

    this.store.asyncReducers = {};
    this.store.sagas = {};

    if (module.hot) {
      module.hot.accept('./reducer', () => {
        this.store.replaceReducer(createRootReducer(this.store.asyncReducers));
      });
    }
  }

  public injectReducer (key: any, reducer: any) {
    if (this.store.asyncReducers.hasOwnProperty(key)) { return; }

    this.store.asyncReducers[key] = reducer;
    this.store.replaceReducer(createRootReducer(this.store.asyncReducers));
  }

  public injectSaga (saga: any) {
    if (this.store.sagas.hasOwnProperty(saga.name)) { return; }

    this.store.sagas[saga.name] = true;
    sagaMiddleware.run(saga);
  }

  public injectSagas (sagas: any) {
    if (Array.isArray(sagas)) { sagas.forEach(saga => this.injectSaga(saga)); } else { this.injectSaga(sagas); }
  }
}

export default new State();
