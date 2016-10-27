import React from 'react';
import Header from '../../../app/components/elements/Header';
import OneColumn from '../../../app/components/layout/OneColumn';
import SignupForm from '../forms/SignupForm';

export default  class Personal extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoading: false,
      items: [],
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.items !== this.state.items) {
      console.log('test');
    }
  }


  render() {

    const state = this.state;

    return (
      <OneColumn >
        <Header />
        Here is text
        {this.state.items}
        <button className="button" onClick={() => { this.setState({ items: ['a', 'b', 'c' ] })  }}>asdasd</button>
      </OneColumn>
    );
  }
}

