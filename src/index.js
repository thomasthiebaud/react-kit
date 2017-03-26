import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import Home from './routes'

const render = () => {
  try {
    ReactDOM.render(
      <AppContainer>
        <Home />
      </AppContainer>,
      document.getElementById('root')
    )
  } catch (err) {
    console.error(err)
  }
}

if (module.hot) {
  module.hot.accept('./routes', () => render())
}

render()
