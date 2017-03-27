import reducer from '../reducer'
import { State } from 'state'

describe('(Reducer) Home', () => {
  it('should return a function', () => {
    expect(typeof reducer === 'function').toEqual(true)
  })

  it('should dispatch GET_GREETINGS_REQUESTED', () => {
    const state = new State()
    state.injectReducer('home', reducer)
    const store = state.store

    store.dispatch({ type: 'GET_GREETINGS_REQUESTED' })
    expect(store.getState().home).toEqual({
      isFetching: true,
    })
  })

  it('should dispatch GET_GREETINGS_SUCCEEDED', () => {
    const state = new State()
    state.injectReducer('home', reducer)
    const store = state.store

    store.dispatch({ type: 'GET_GREETINGS_SUCCEEDED', greetings: 'test' })
    expect(store.getState().home).toEqual({
      greetings: 'test',
      isFetching: false,
    })
  })
})
