import React from 'react';
import cactus from '../resources/cactus.png';

const Homepage = () => {
  return (
    <header className="main">
      <img src={cactus} className="App-logo" alt="cactus" />
      <p>
        <code>Admirals never die !</code>
      </p>
    </header>
  );
};

export default Homepage;