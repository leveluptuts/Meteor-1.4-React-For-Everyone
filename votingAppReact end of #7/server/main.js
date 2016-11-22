import { Meteor } from 'meteor/meteor';

import Items from '../imports/api/Items';


Meteor.startup(() => {
  Items.insert({
    itemOne: {
      text: 'Hi',
      value: 0,
    },
    itemTwo: {
      text: 'Hello',
      value: 0,
    }
  });
  // code to run on server at startup
});
