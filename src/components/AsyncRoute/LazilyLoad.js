import React from 'react'

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
      this.setState({ component: component.default || component })
    })
  }

  render () {
    if (this.state.component) {
      return React.Children.only(this.props.children(this.state.component))
    }
    return null
  }
}

LazilyLoad.propTypes = {
  children: React.PropTypes.func.isRequired,
  render: React.PropTypes.func.isRequired,
}

export default LazilyLoad
