import reducer from '../reducer'
import { State } from 'state'

describe('(Reducer) Home', () => {
  it('should return a function', () => {
    expect(typeof reducer === 'function').toEqual(true)
  })

  it('should dispatch an action', () => {
    const state = new State()
    state.injectReducer('home', reducer)
    const store = state.store

    store.dispatch({ type: 'CHANGE_GREETINGS', greetings: 'test' })
    expect(store.getState().home).toEqual({
      greetings: 'test',
    })
  })
})
