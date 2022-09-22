import React from 'react';
import Navigation from '../components/commonComponents/Navigation';
import Title from '../components/homeComponents/Title';
import Introduction from '../components/homeComponents/Introduction';
import Movie from '../components/homeComponents/Movie';
import Video from '../components/homeComponents/Video';
import PianoInfo from '../components/homeComponents/PianoInfo';
import Test from '../components/homeComponents/Test';
import Footer from '../components/commonComponents/Footer';

const Home = () => {
  return (
    <>
      <div className="home">
        <Navigation />

        {/* 01: TITLE */}
        <Title />
        {/* 02: INTRODUCTION */}
        <Introduction />
        {/* 03: Movie */}
        <Movie />
        {/* 04: VIDEO */}
        <Video />
        {/* 05: PianoInfo */}
        <PianoInfo />
        {/* 06: Test */}
        <Test />

        <Footer />
      </div>
    </>
  );
};

export default Home;
