import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddPost from './AddPost.js';
import TopicList from './PostList.js';
import AddComment from './AddComment.js';
import CommentList from './CommentList.js';



export default class App extends React.Component {
  render() {
    return(
      <>
        <TitleBar
          title={this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>

        {/* wrap AddPost and PostList with div that utilizes the wrapper class*/}
        <div className='wrapper'>
        <AddPost />
         <PostList passed_posts={this.props.passedPropAllPosts}/>

       </div>
     </>
   )
 }

};

App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.string.isRequired,
  passedPropAllComments: PropTypes.string.isRequired
};
