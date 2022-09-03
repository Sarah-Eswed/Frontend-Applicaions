import React, { Component } from 'react';
import './Likes.css';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 347,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <div>
        <button className="button2" onClick={this.IncrementItem}><i class="far fa-heart fa-2x"></i></button>
        <button className="button2"><i class="far fa-comment fa-2x"></i></button>
        <button className="button2"><i class="far fa-paper-plane fa-2x"></i></button>

        <button className="button"><i class="far fa-bookmark fa-2x"></i></button>
       
       <p className="like">{ this.state.clicks } Likes</p> 

   
      </div>
    );
  }
}

export default Like;