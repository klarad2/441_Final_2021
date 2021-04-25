import React from 'react';
import {USER_Posts_Access} from './../api/user_posts.js';

import PropTypes from 'prop-types';

export default class AddPost extends React.Component{

  processFromData(event){
    event.preventDefault()
    let newPost = even.target.fromInputNameAttribute.value;
    if(newPost){
      even.target.formInputNameAttribute.value = '';//clear input box
      USER_Posts_Access.insert({
        topic: newPost,
        likes: 0,
        dislikes:0,
        time: new Date(),
      });


    };
  }
  render(){
    return(
      <div className='post_format'>
        <form className='form' onSubmit={this.processFromData.bind(this)}>
          <input className='form_input' type='text' name='formInputNameAttribute' placeholder="What's on you mind"/>
          <button className='button'>Post</button>
        </form>
      </div>
    );
  }
};
