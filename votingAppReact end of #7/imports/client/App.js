import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Items from '../api/Items';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  headingClick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
        <header onClick={this.headingClick.bind(this)}>
          <Heading count={this.state.count} />
        </header>
    );
  }
}


export default createContainer(() => {
  return {
    items: Items.find({}).fetch()
  }
}, App);




class Heading extends Component {
  render() {
    return (
      <h1>{this.props.count}</h1>
    )
  }
}
