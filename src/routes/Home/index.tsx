import * as React from 'react';
// import { Loadable } from 'react-loadable';
import * as Loadable from 'react-loadable';

import state from '../../state';

import reducer from './reducer';
import sagas from './sagas';

export const HomeLoadable = Loadable({
  loader: () => import('./Home'),
  loading () {
    return <div>Loading...</div>;
  },
  render (loaded: any, props: any) {
    const Component = loaded.default;

    state.injectReducer('home', reducer);
    state.injectSagas(sagas);

    return <Component {...props} />;
  },
});
