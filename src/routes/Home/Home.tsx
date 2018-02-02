import * as React from 'react';

import { connect } from 'react-redux';

import { computeGreetings } from './selectors';

import './style.scss';

interface IHomeProps {
  getGreetings: Function;
  greetings: any;
}

class Home extends React.Component<IHomeProps> {
  public componentWillMount () {
    this.props.getGreetings();
  }

  public render () {
    return (
      <h1>
        Hello {this.props.greetings}
      </h1>
    );
  }
}

const mapDispatchToProps = (dispatch): Partial<IHomeProps> => ({
  getGreetings: () => dispatch({ type: 'GET_GREETINGS_REQUESTED' }),
});

const mapStateToProps = (state): Partial<IHomeProps> => ({
  greetings: computeGreetings(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
