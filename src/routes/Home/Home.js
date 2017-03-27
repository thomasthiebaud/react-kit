import React from 'react'

const Home = (props) => (
  <h1>Hello {props.greetings}</h1>
)

Home.propTypes = {
  greetings: React.PropTypes.string.isRequired,
}

export default Home
