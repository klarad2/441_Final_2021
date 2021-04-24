import React from 'react';
//test
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddPost from './AddPost.js';
import TopicList from './PostList.js';


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
