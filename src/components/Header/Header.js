import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='logo__wrapper'>
          <img src={logo} alt='' className='logo__image' />
        </div>
      </div>
    </div>
  );
};

export default Header;
