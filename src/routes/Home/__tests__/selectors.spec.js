import {
  getGreetings,
  computeGreetings,
} from '../selectors'

describe('(Selector) Home', () => {
  describe('#getGreetings', () => {
    it('should render greetings', () => {
      expect(getGreetings({
        home: {
          greetings: 'Everyone',
        },
      })).toEqual('Everyone')
    })
  })

  describe('#computeGreetings', () => {
    it('should compute greetings', () => {
      expect(computeGreetings({
        home: {
          greetings: 'Everyone',
        },
      })).toEqual('Everyone !!!')
    })
  })
})
