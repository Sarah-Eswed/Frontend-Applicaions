import React from 'react';
import './Comment.css';



const Comment = (props) =>{
return(
<div className="Section">

<p className="User">{props.userName}</p> <p className="Comment">{props.comment}</p>

<sup className="hours"> {props.hours}</sup>

<input type="text" name="comment" placeholder="Add a comment..." className="addComment" /> 

</div>
)
}

export default Comment;