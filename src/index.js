import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import { Router } from './routes'

import './index.scss'

const render = () => {
  try {
    ReactDOM.render(
      <AppContainer>
        <Router />
      </AppContainer>,
      document.getElementById('root')
    )
  } catch (err) {
    // eslint-disable-next-line
    console.error(err)
  }
}

if (module.hot) {
  module.hot.accept('./routes', () => render())
}

render()
