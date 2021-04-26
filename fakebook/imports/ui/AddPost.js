import React from 'react';
import {USER_Posts_Access} from './../api/user_posts.js';



export default class AddPost extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newPost = event.target.formInputNameAttribute.value;
    if(newPost){
      event.target.formInputNameAttribute.value = '';
      USER_Posts_Access.insert({
        topic: newPost,
        likes: 0,
        Dislikes: 0,
        time: new Date(),
      });


    };
  }
  render(){
    return(
      <div className='post_format'>
        <form className='form' onSubmit={this.processFormData.bind(this)}>
          <input className='form_input' type='text' name='formInputNameAttribute' placeholder="What's on you mind"/>
          <button className='button'>Post</button>
        </form>
      </div>
    );
  }
};
