import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import Provider from 'react-redux/lib/components/Provider'

import state from 'state'
import Router from './routes'

import 'styles/globals.scss'

const render = () => {
  try {
    ReactDOM.render(
      <AppContainer>
        <Provider store={state.store}>
          <Router />
        </Provider>
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
