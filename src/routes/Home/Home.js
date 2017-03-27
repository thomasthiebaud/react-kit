import React from 'react'

class Home extends React.Component {
  componentWillMount () {
    this.props.getGreetings()
  }

  render () {
    return (
      <h1>Hello {this.props.greetings}</h1>
    )
  }
}

Home.propTypes = {
  getGreetings: React.PropTypes.func.isRequired,
  greetings: React.PropTypes.string.isRequired,
}

export default Home
