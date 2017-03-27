import React from 'react'
import Provider from 'react-redux/lib/components/Provider'

import mount from 'enzyme/mount'

import Container from '../Container'
import reducer from '../reducer'
import Home from '../Home'

import { State } from 'state'

const state = new State()

describe('(Container) Home', () => {
  it('should get container', () => {
    state.injectReducer('home', reducer)

    const wrapper = mount(
      <Provider store={state.store}>
        <Container />
      </Provider>)

    const home = wrapper.find(Home)
    expect(home.prop('greetings')).toEqual('World !!!')
  })
})
