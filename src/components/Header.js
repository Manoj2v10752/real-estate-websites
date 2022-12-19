import React from 'react';
// import { BiBorderRadius } from 'react-icons/bi';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b bg-orange-400'>
      <div className='container mx-auto flex justify-between items-center '>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
      <div style={{fontSize:40, color:"#2e2c2e", fontFamily:"revert-layer", }}>WELL COME TO MINI LANDS....!</div>
        <div className='flex items-center gap-6'>
          <Link className='bg-teal-600 hover:bg-violet-900 text-white px-4 py-3 rounded-lg transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-teal-600 hover:bg-violet-900 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
