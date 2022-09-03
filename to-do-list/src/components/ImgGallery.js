import React from 'react';
import './Img.css'

function Img(props) {
  return (
    <div>
     <img className="Image" src={props.src} alt={props.alt}/>

    </div>
  )
}

export default Img;
