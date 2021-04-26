import React from 'react';
import {USER_Comments_Access} from './../api/user_comments.js';



export default class AddComment extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newComment = event.target.formInputNameAttribute.value;
    if(newComment){
      event.target.formInputNameAttribute.value = '';
      USER_Comments_Access.insert({
        postid: '4',
        commentInfo: newComment,
        likes: 0,
        dislikes:0,
        time: new Date(),
      });


    };
  }
  render(){
    return(
      <div className='post_format'>
        <form className='form' onSubmit={this.processFormData.bind(this)}>
          <input className='form_input' type='text' name='formInputNameAttribute' placeholder="Write a comment"/>
          <button className='button'>Post</button>
        </form>
      </div>
    );
  }
};
