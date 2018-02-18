import * as React from 'react'
import * as Spinner from 'react-spinkit'

import './style.scss'

import { Feature, Type } from './state'

export interface HomeProps {
  features: Feature[]
  loading: boolean
  shuffle: () => {
    type: Type,
  }
}

const Loading = () => (
  <div className="level-item has-text-centered" key="level-item-loading">
    <Spinner name="three-bounce" className="home__spinner" />
  </div>
)

const List = (props: HomeProps) => {
  const features = props.features.map((feature) => (
    <div className="level-item has-text-centered" key={`level-item-${feature.title}`}>
      <div>
        <p className="heading">{feature.heading}</p>
        <p className="title">{feature.title}</p>
      </div>
    </div>
  ))

  return (
    <React.Fragment>
      {features}
    </React.Fragment>
  )
}

class Home extends React.Component<HomeProps> {
  private shuffle: () => {
    type: Type,
  }

  constructor(props: HomeProps) {
    super(props)
    this.shuffle = this.props.shuffle.bind(this)
  }

  public render() {
    return (
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/" >
                  REACT KIT
                </a>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              A ready-to-go React App
            </h1>
            <h2 className="subtitle">
              Featuring...
            </h2>
            <nav className="level">
              {this.props.loading ? <Loading /> : <List {...this.props} />}
            </nav>
            <button className="button is-primary" onClick={this.shuffle}>
              Shuffle
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
