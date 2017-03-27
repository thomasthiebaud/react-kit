import combineReducers from 'redux/lib/combineReducers'

export default function createRootReducer (asyncReducers) {
  return combineReducers({
    ...asyncReducers,
  })
}
