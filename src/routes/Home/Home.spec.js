import React from 'react'
import mount from 'enzyme/mount'

import Home from './Home'

describe('(Component) Home', () => {
  it('should render a the Home component', () => {
    const wrapper = mount(<Home />)

    expect(wrapper.find('h1').text()).toEqual('Hello World !!!')
  })
})
