import React from 'react';
import logoImage from '../../assets/logo.png';

export default function Logo() {
  return (
    <div className='logo w-10 h-10'>
      <img src={logoImage} alt='logo' />
    </div>
  );
}
