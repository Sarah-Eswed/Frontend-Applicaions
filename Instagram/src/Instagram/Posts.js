import React from 'react';
import './Posts.css';


const Post = (props) => {
return(

<div>

<img src={props.src} alt={props.alt} className="pp"/>
<p className="User">{props.username}</p>
<button className="button"><i class="fas fa-ellipsis-h"></i></button>
<hr />
<img src={props.src1} alt={props.src2} className="Post" className="Post" />

<p>{props.user}</p> <p>{props.comment}</p>
</div>
)
}

export default Post;