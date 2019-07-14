import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img
          className='header__logo'
          src='/images/penguin.png'
          alt='grateful penguin logo'
        />
        <h3 className='header__title'>Grateful Penguin</h3>
      </div>
    );
  }
}

export default Header;
