import React from 'react';
import {USER_Comments_Access} from './../api/user_comments.js';

import PropTypes from 'prop-types';

export default class AddComment extends React.Component{

  processFromData(event){
    event.preventDefault()
    let newComment = even.target.fromInputNameAttribute.value;
    if(newComment){
      even.target.formInputNameAttribute.value = '';//clear input box
      USER_Comment_Access.insert({
        topic: newComment,
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
          <input className='form_input' type='text' name='formInputNameAttribute' placeholder="Write a comment"/>
          <button className='button'>Post</button>
        </form>
      </div>
    );
  }
};
