import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Item from './Item';

import Items from '../api/Items';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Level Up Voting</h1>
        </header>
        <main>
          {this.props.items.map((item) => {
            return <Item item={item} />
          })}
        </main>
      </div>
    );
  }
}


export default createContainer(() => {
  return {
    items: Items.find({}).fetch()
  }
}, App);
