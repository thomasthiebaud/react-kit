import { combineReducers } from 'redux'

export default asyncReducers => combineReducers({
  ...asyncReducers,
})
