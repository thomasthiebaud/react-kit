import { put, takeEvery } from 'redux-saga/effects';

export function * fetchGreetings () {
  yield put({
    greetings: 'Everyone',
    type: 'GET_GREETINGS_SUCCEEDED',
  });
}

function * fetchGreetingsSaga () {
  yield takeEvery('GET_GREETINGS_REQUESTED', fetchGreetings);
}

export default [
  fetchGreetingsSaga,
];
