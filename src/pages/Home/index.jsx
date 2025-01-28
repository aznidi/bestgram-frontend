import React from 'react';
import Hero from './Hero';
import WhyUs from './WhyUs';

function Home() {
  return (
    <>
      <main className='px-6 lg:px-16'>
        <Hero />
        <WhyUs />
      </main>
    </>
  );
}

export default Home;
