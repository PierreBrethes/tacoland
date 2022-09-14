import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import taco from '../resources/taco.png';
import { Wrapper } from './header.style';

const Header = () => {
  return (
    <div className='header'>
      <img src={taco} className="logo" alt="taco" />
      <Wrapper>
        <Link to="/home"><code>Home</code></Link>
        <Link to="/nfts"><code>NFT gallery</code></Link>
      </Wrapper>
    </div>
  );
};

export default Header;