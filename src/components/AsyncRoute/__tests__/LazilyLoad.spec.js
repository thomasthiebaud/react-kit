import React from 'react'
import shallow from 'enzyme/shallow'
import mount from 'enzyme/mount'
import sinon from 'sinon'

import LazilyLoad from '../LazilyLoad'

describe('(Component) LaziLoad', () => {
  it('should render null will the component is loading', () => {
    const component = () => (<h1>Hello world</h1>)
    const spy = sinon.spy(() => Promise.resolve(component))

    const wrapper = shallow(
      <LazilyLoad
        render={spy}
      >
        {Component => (
          <Component />
        )}
      </LazilyLoad>
    )
    expect(spy.called).toEqual(true)
    expect(wrapper.equals(null)).toEqual(true)
  })

  it('should render the component once it is loaded', done => {
    const component = () => (<h1>Hello world</h1>)
    const spy = sinon.spy(() => Promise.resolve(component))

    const wrapper = mount(
      <LazilyLoad
        render={spy}
      >
        {Component => (
          <Component />
        )}
      </LazilyLoad>
    )

    setTimeout(() => {
      try {
        expect(wrapper.find('h1').text()).toEqual('Hello world')
        done()
      } catch (e) {
        done.fail(e)
      }
    }, 100)
  })
})
