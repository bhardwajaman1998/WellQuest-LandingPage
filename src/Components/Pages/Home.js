import React, { useState } from "react";
import logo from "../Images/logo.png";
import bannerlarge from "../Images/bannerlarge2.png";
import bannerMobile from "../Images/bannerMobile2.png";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";
import image6 from "../Images/image6.png";
import team1 from "../Images/team1.png";
import team2 from "../Images/team2.png";
import team3 from "../Images/team3.png";
import team4 from "../Images/team4.png";
import team5 from "../Images/team5.png";
import team6 from "../Images/team6.png";
import team7 from "../Images/team7.png";
import team8 from "../Images/team8.png";
import contactLarge from "../Images/contactLarge.png";
import contactMobile from "../Images/contactMobile.png";
import banner2large2 from "../Images/banner2large2.png";
import banner2mobile from "../Images/banner2mobile.png";
import goallarge from "../Images/goallarge.png";
import "../../index.css";

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
        <div className={`navbar ${navbarActive ? "active" : ""}`}>
          <a href="#">Proposal</a>
          <a href="#">About Us</a>
          <a href="#" className="talk">
            Let's Talk
          </a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          ☰
        </div>
      </div>

      <div className="banner">
        <div className="bannerParagraph">
          <p>
            Elevate your fitness journey with <br />
            precision and insight. <strong>Tailored for you!</strong>
          </p>
        </div>
        <img className="banner-large" src={bannerlarge} alt="banner" />
        <img className="banner-mobile" src={bannerMobile} alt="banner" />

        <button className="banner-button">GET STARTED</button>
      </div>
      <div>
        <h2>FEATURES</h2>
        <h3>Customer Side Main Feaututes</h3>
        <div className="featureImages">
          <img className="image1" src={image1} alt="features" />
          <img className="image2" src={image2} alt="features" />
          <img className="image3" src={image3} alt="features" />
        </div>
      </div>
      <div>
        <h3>Coach Side Main Feaututes</h3>
        <div className="featureImages">
          <img className="image4" src={image4} alt="features" />
          <img className="image5" src={image5} alt="features" />
          <img className="image6" src={image6} alt="features" />
        </div>
      </div>

      <h2>OUR GOAL</h2>
      <p>
        Empowering fitness business and trainers to support <br /> customers in
        achieving their nutrition goals.
      </p>
      <div className="goal">
        <img className="goallarge" src={goallarge} alt="goals" />
      </div>
      <div className="banner2">
        <img className="banner2large2" src={banner2large2} alt="banner" />
        <img className="banner2mobile" src={banner2mobile} alt="banner" />
      </div>
      <h2>THE TEAM</h2>
      <p>
        We embrace a dynamic and innovative mindset that is <br />
        reflected in our approach to problem-solving.
      </p>
      <div className="team-wrapper">
        <div className="team designerteam">
          <img className="team1" src={team1} alt="features" />
          <img className="team2" src={team2} alt="features" />
          <img className="team3" src={team3} alt="features" />
          <img className="team4" src={team4} alt="features" />
        </div>
        <div className="team developerteam">
          <img className="team5" src={team5} alt="features" />
          <img className="team6" src={team6} alt="features" />
          <img className="team7" src={team7} alt="features" />
          <img className="team8" src={team8} alt="features" />
        </div>
      </div>
      <div className="contact">
        <img className="contactLarge" src={contactLarge} alt="banner" />
        <img className="contactMobile" src={contactMobile} alt="banner" />
        <form className="contact-form">
          <div>
            <h2>CONTACT US</h2>
            <div className="contactlabel">
              <label>Name:</label>
            </div>
            <input type="text" placeholder="Your name here" required />
          </div>
          <div>
            <div className="contactlabel">
              <label>Email:</label>
            </div>
            <input type="email" placeholder="Your email here" required />
          </div>
          <div>
            <div className="contactlabel">
              <label htmlFor="message">Message:</label>
            </div>
            <textarea placeholder="Your message here" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
