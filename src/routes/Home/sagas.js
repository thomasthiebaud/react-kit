import { put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'

function* fetchGreetings() {
  yield delay(500)
  yield put({
    type: 'GET_GREETINGS_SUCCEEDED',
    greetings: 'Hello Everyone',
  })
}

function* fetchGreetingsSaga() {
  yield takeEvery('GET_GREETINGS_REQUESTED', fetchGreetings)
}

export default [
  fetchGreetingsSaga,
]
