import React from 'react';
import Navigation from '../components/commonComponents/Navigation';

import PianoBrand from '../components/pianoInfoComponents/PianoBrand'
import PianoSlide from '../components/pianoInfoComponents/PianoSlide'
import Others from '../components/pianoInfoComponents/Others'

import Footer from '../components/commonComponents/Footer';

const PianoYamaha = () => {
  // yamaha: 1, steinway: 2, boesendorfer: 3
  const pianoId = 1;

  return (
    <>
      <div className="pianoyamaha">
        <Navigation />

        {/* 01: PianoBrand */}
        <PianoBrand pianoId={pianoId}/>

        {/* 02: PianoSlide */}
        <PianoSlide pianoId={pianoId}/>
        
        {/* 03: Others */}
        <Others />

        <Footer />
      </div>
    </>
  );
};

export default PianoYamaha;
