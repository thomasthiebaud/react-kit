import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Router from './routes'
import { stateManager } from './state'

import './index.scss'

const render = () => {
  try {
    ReactDOM.render(
      <Provider store={stateManager.store}>
        <Router />
      </Provider>,
      document.getElementById('root'),
    )
  } catch (err) {
    // tslint:disable-next-line
    console.error(err)
  }
}

render()
