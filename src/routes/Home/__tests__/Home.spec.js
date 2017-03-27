import React from 'react'
import mount from 'enzyme/mount'
import sinon from 'sinon/lib/sinon'

import Home from '../Home'

describe('(Component) Home', () => {
  it('should render a the Home component', () => {
    const spy = sinon.spy()
    expect(spy.called).toEqual(false)

    const wrapper = mount(<Home
      greetings='test'
      getGreetings={spy}
    />)

    expect(spy.called).toEqual(true)
    expect(wrapper.find('h1').text()).toEqual('Hello test')
  })
})
