import React from 'react'
import Route from 'react-router-dom/Route'

class LazilyLoad extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  componentWillMount () {
    this.load()
  }

  load () {
    return this.props.render().then((component) => {
      this.setState({ component: component.default })
    })
  }

  render () {
    if (this.state.component) {
      return React.Children.only(this.props.children(this.state.component))
    }
    return null
  }
}

const AsyncRoute = route => (
  <Route
    path={route.path}
    render={props => (
      <LazilyLoad render={route.component} >
        {Component => (
          <Component {...props} routes={route.routes} />
        )}
      </LazilyLoad>
    )}
  />
)

LazilyLoad.propTypes = {
  children: React.PropTypes.func.isRequired,
  render: React.PropTypes.func.isRequired,
}

export default AsyncRoute
