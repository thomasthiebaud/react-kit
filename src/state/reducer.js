import combineReducers from 'redux/lib/combineReducers'

export default (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
  })
}
