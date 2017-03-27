import combineReducers from 'redux/lib/combineReducers'
import {
  reducer as formReducer,
} from 'redux-form'

export default (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    form: formReducer,
  })
}
