import React from 'react';
import Navbar from './navbar';
import Hero from './hero';

const Header = () => {
  return (
    <header className="w-full h-auto">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
