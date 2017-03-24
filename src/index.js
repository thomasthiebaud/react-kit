import React from 'react';
import ReactDOM from 'react-dom';

import Home from './routes';

const render = () => {
  try {
    ReactDOM.render(
      <Home />,
      document.getElementById('root')
    );
  } catch (err) {
    console.error(err)
  }
};

if (module.hot) {
  module.hot.accept('./routes', () => render());
}

render()
