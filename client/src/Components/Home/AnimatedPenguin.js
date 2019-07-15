import React, { Component } from "react";

class AnimatedPenguin extends Component {
  render() {
    return (
      <div>
        <img
          className='animated_penguin'
          src='/images/penguin.png'
          alt='penguin animation'
        />
      </div>
    );
  }
}

export default AnimatedPenguin;
