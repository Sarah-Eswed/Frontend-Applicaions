import React from 'react';
import './Story.css'

const Story = (props) =>{
return(

<div className="Stories">
<img src={props.src} alt={props.alt} className="Story Unread" />
<img src={props.src1} alt={props.alt1} className="Story Unread" />
<img src={props.src2} alt={props.alt2} className="Story Unread" />
<img src={props.src3} alt={props.alt3} className="Story Unread" />
<img src={props.src4} alt={props.alt4} className="Story Unread" />
<img src={props.src5} alt={props.alt5} className="Story Unread" />
<img src={props.src6} alt={props.alt6} className="Story Unread" />
<img src={props.src8} alt={props.alt8} className="Story Unread" />
<img src={props.src9} alt={props.alt9} className="Story Read" />
<img src={props.src10} alt={props.alt10} className="Story Read" />
<p className="Names">{props.name} &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
 {props.name1} &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 
 {props.name2} &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
 {props.name3} &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
  {props.name4} &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 
   {props.name5} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
   {props.name6} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
   {props.name7}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
   {props.name8}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
   {props.name9}  
    </p>
</div>
)
}

export default Story;