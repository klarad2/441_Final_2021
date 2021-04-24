import React from 'react';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';
import {USER_Posts_Access} from './../imports/api/user_posts.js';

import { App } from '/imports/ui/App.js';

Meteor.startup(() => {

  Tracker.autorun(()  =>

  let allPostsInDB = USER_Posts_Access.find({/*empty to get all posts */}), {sort:{votes: -1}}).fetch();


  //
    let title = 'FAKEBOOK';

    ReactDOM.render(<App
    passedPropTitle={title}
    passedPropModerator={'Devin K'}
    passPropAllPost= {allPostsInDB}

  , document.getElementById('content'));
  });
});
