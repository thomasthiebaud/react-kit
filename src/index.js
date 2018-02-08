import React from 'react'
import ReactDOM from 'react-dom'

import Router from './routes'

import './index.scss'

const render = () => {
  try {
    ReactDOM.render(
      <Router />,
      document.getElementById('root')
    )
  } catch (err) {
    // eslint-disable-next-line
    console.error(err)
  }
}

render()
