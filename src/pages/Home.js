import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Hero/>
      <HouseList />
    </div>
  );
};

export default Home;
