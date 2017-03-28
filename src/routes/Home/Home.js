import React from 'react'

import style from './style.scss'

class Home extends React.Component {
  componentWillMount () {
    this.props.getGreetings()
  }

  render () {
    return (
      <h1 className={style.disco}>
        Hello {this.props.greetings}
      </h1>
    )
  }
}

Home.propTypes = {
  getGreetings: React.PropTypes.func.isRequired,
  greetings: React.PropTypes.string.isRequired,
}

export default Home
