import { combineReducers } from 'redux';

export default (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
  });
};
