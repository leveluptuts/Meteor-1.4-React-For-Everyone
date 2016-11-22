import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Item from './Item';

import Items from '../api/Items';

class App extends Component {
  addItems(event) {
    event.preventDefault();
    const itemOne = this.refs.itemOne.value.trim();
    const itemTwo = this.refs.itemTwo.value.trim();
    if (itemOne !== '' && itemTwo !== '') {
      Items.insert({
        itemOne: {
          text: itemOne,
          value: 0,
        },
        itemTwo: {
          text: itemTwo,
          value: 0,
        }
      });
      this.refs.itemOne.value = '';
      this.refs.itemTwo.value = '';
    }
  }
  render() {
    return (
      <div>
        <header>
          <h1>Level Up Voting</h1>
        </header>
        <main>
          <form onSubmit={this.addItems.bind(this)}>
            <input type='text' ref='itemOne' />
            <input type='text' ref='itemTwo'/>
            <button type='submit'>Add Items</button>
          </form>
          {this.props.items.map((item) => {
            return <Item item={item} key={item._id}/>
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
