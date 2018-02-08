import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Router from './routes'
import state from './state'

import './index.scss'

const render = () => {
  try {
    ReactDOM.render(
      <Provider store={state.store}>
        <Router />
      </Provider>,
      document.getElementById('root')
    )
  } catch (err) {
    // eslint-disable-next-line
    console.error(err)
  }
}

render()
