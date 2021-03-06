import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';

export default class PostList extends React.Component {
  renderAllPosts(){
    if (this.props.passed_posts.length == 0){
      return (

          <p className = 'single-block-item-style__message'>
              Add a new post to get started
          </p>
      
      );
    } else {
      return this.props.passed_posts.map((post) => {
        return <RenderPost key={post._id} post_prop_obj={post}/>
      });
    }

  }
  render(){
    return (
      <>
        {this.renderAllPosts()}
      </>
    )
  }

};
