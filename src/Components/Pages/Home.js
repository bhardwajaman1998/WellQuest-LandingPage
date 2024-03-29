import React, { useState } from 'react';
import logo from '../Mages/logo.png';
import bannerlarge from '../Mages/bannerlarge.png';
import bannerMobile from '../Mages/bannerMobile.png';
import advance from '../Mages/advance.png';
import community from '../Mages/community.png';
import partner from '../Mages/partner.png';
import solution from '../Mages/solution.png';
import goallarge from '../Mages/goallarge.png';
import goalMobile from '../Mages/goalMobile.png';
import '../../index.css';

function Home() {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`navbar ${navbarActive ? 'active' : ''}`}>
          <a href="#">Proposal</a>
          <a href="#">About Us</a>
          <a href="#">Let's Talk</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          ☰
        </div>
      </div>
      <div className='banner'>
        <img className="banner-large" src={bannerlarge} alt="banner" />
        <img className="banner-mobile" src={bannerMobile} alt="banner" />
      </div>
      <div>
        <h2>features</h2>
        <div className='featureImages'>
        <img className="advance" src={advance} alt="features" />
        <img className="community" src={community} alt="features" />
        <img className="partner" src={partner} alt="features" />
        <img className="solution" src={solution} alt="features" />
        </div>
      </div>
      <div className='goal'>
        <h2>OUR GOal</h2>
        <p>Empowering fitness business and trainers to support {'/n'}
           customers in achieving their nutrition goals.
        </p>
        <img className="goallarge" src={goallarge} alt="goals" />
        <img className='goalMobile' src={goalMobile} alt='goals' />
      </div>
    </div>
    
  );
}

export default Home;
