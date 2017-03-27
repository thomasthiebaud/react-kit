import { fetchGreetings } from '../sagas'
import { put } from 'redux-saga/effects'

describe('(Saga) Home', () => {
  describe('#fetchGreetings', () => {
    it('should return a promise', () => {
      const generator = fetchGreetings()
      expect(generator.next().value).toEqual(put({
        type: 'GET_GREETINGS_SUCCEEDED',
        greetings: 'Everyone',
      }))
    })
  })
})
