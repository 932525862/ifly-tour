import React from 'react';
import Tours from './tours';
import Cite from './cite';
import AboutSection from './about';
import FlightBookingForm from './flight';

const Main = () => {
  return (
    <main className="">
      <Tours />
      <Cite />
      <AboutSection />
      <FlightBookingForm />
    </main>
  );
};

export default Main;
