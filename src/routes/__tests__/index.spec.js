import React from 'react'
import mount from 'enzyme/mount'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import Entry from '..'

describe('(Entry) Routes', () => {
  it('should render a router', () => {
    const wrapper = mount(<Entry />)
    expect(wrapper.find(BrowserRouter).length).toEqual(1)
  })
})
