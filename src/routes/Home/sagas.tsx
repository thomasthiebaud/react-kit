import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

import { Type } from './state'

function* shuffleFeatures() {
  yield delay(3000)
  yield put({
    type: Type.SHUFFLE_DONE,
  })
}

function* shuffleFeaturesSaga() {
  yield takeEvery(Type.SHUFFLE_REQUESTED, shuffleFeatures)
}

export default [
  shuffleFeaturesSaga,
]
