import { combineReducers, Reducer, ReducersMapObject } from 'redux'

export default (asyncReducers: ReducersMapObject) => combineReducers({
  ...asyncReducers,
})
