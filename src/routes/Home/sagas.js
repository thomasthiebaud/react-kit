import { put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'

function* shuffleFeatures() {
  yield delay(3000)
  yield put({
    type: 'SHUFFLE-DONE',
  })
}

function* shuffleFeaturesSaga() {
  yield takeEvery('SHUFFLE-REQUESTED', shuffleFeatures)
}

export default [
  shuffleFeaturesSaga,
]
