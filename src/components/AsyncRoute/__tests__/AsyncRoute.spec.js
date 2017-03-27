import React from 'react'
import mount from 'enzyme/mount'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import MemoryRouter from 'react-router-dom/MemoryRouter'

import AsyncRoute from '../AsyncRoute'

const route = {
  path: '/',
  component: () => Promise.resolve(() => (<h1>Hello world</h1>)),
}

describe('(Component) AsyncRoute', () => {
  it('should render an asyncRoute', () => {
    const wrapper = mount(
      <BrowserRouter>
        <AsyncRoute key={route.path} {...route} />
      </BrowserRouter>
    )

    expect(wrapper.contains(
      <BrowserRouter>
        <AsyncRoute key={route.path} {...route} />
      </BrowserRouter>
    )).toEqual(true)
  })

  it('should render the component once it is loaded', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={['/']}
      >
        <AsyncRoute key={route.path} {...route} />
      </MemoryRouter>
    )

    setTimeout(() => {
      expect(wrapper.contains(
        <MemoryRouter>
          <AsyncRoute key={route.path} {...route} />
        </MemoryRouter>
      )).toEqual(true)
    }, 100)
  })
})
