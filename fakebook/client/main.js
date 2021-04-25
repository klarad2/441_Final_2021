import React from 'react';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';
import {USER_Posts_Access} from './../imports/api/user_posts.js';
import {USER_Comments_Access} from './../imports/api/user_comments.js';
import { App } from './../imports/ui/App.js';

Meteor.startup(() => {

  Tracker.autorun(()  => {

  let allPostsInDB = USER_Posts_Access.find({/*empty to get all posts */}, {sort:{time: -1}});

  let allCommentsInDB = USER_Comments_Access.find({/*empty to get all comments*/}, {sort:{time: -1}});


  //
    let title = 'FAKEBOOK';

    ReactDOM.render(<App
    passedPropTitle={title}
    passedPropModerator={'Devin K'}
    passPropAllPost= {allPostsInDB}
    passedPropAllComments={allCommentsInDB}

  />, document.getElementById('content'));
  });
});
