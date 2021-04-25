import React from 'react';
import {USER_Comments_Access} from './../api/user_comments.js';

import PropTypes from 'prop-types';


export default class RenderComment extends React.Component{
  commentSelect(){
     if(this.props.comment_prop_obj.postid==4){
       return   <>
           <div key={this.props.comment_prop_obj._id} className='single-block-item-style'>
             {/* below is a statement function */}
             <div>

               <h3 className='post__topic'>{this.props.comment_prop_obj.commentInfo}</h3>
               <button className='deletebutton button--round' onClick={() => {
                 USER_comments.remove({_id: this.props.comment_prop_obj._id})
               }}>X</button>
             </div>
             </div>

         </>
     } else {
       return
     }
   }
   render(){
     return (<div>
       {this.commentSelect()}
       </div>
     );
   }
 };
