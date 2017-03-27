import { put, takeEvery } from 'redux-saga/effects'

export function * fetchGreetings () {
  yield put({
    type: 'GET_GREETINGS_SUCCEEDED',
    greetings: 'Everyone',
  })
}

function * fetchGreetingsSaga () {
  yield takeEvery('GET_GREETINGS_REQUESTED', fetchGreetings)
}

export default [
  fetchGreetingsSaga,
]
