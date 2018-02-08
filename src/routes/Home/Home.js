import React from 'react'
import PropTypes from 'prop-types'

class Home extends React.PureComponent {
  render() {
    return (
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              React Kit
            </h1>
            <h2 className="subtitle">
              A ready-to-go React App
            </h2>
          </div>
        </div>
        <button onClick={() => this.props.getGreetings()}>Click</button>
        {this.props.greetings}
      </section>
    )
  }
}

Home.propTypes = {
  getGreetings: PropTypes.func.isRequired,
  greetings: PropTypes.string,
}

Home.defaultProps = {
  greetings: null,
}

export default Home
