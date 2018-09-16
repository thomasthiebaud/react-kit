import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import './style.scss';

class Home extends React.PureComponent {
  render() {
    const { features, loading, shuffle } = this.props;
    return (
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  REACT KIT
                </a>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">A ready-to-go React App</h1>
            <h2 className="subtitle">Featuring...</h2>
            <nav className="level">
              {loading ? (
                <div className="level-item has-text-centered" key="level-item-loading">
                  <Spinner name="three-bounce" className="home__spinner" />
                </div>
              ) : (
                features.map(feature => (
                  <div className="level-item has-text-centered" key={`level-item-${feature.title}`}>
                    <div>
                      <p className="heading">{feature.heading}</p>
                      <p className="title">{feature.title}</p>
                    </div>
                  </div>
                ))
              )}
            </nav>
            <button className="button is-primary" type="button" onClick={() => shuffle()}>
              Shuffle
            </button>
          </div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  shuffle: PropTypes.func.isRequired,
};

export default Home;
