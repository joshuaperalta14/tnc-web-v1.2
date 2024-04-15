import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from "../assets/Restaurant Cafe working.jpg";
import aboutlogo from "../assets/TNC_2020_Logo_Landscape_Group_white2.png";
import './About.css';

const About = () => {
  return (
    <div className="about-us">
      <Link to="/" className="top-left-button">go back to Home</Link>
      <h1>About Us</h1>
      <div className="about-section">
        <div className="image-container">
          <img src={aboutlogo} alt="Logo" className="about-logo" />
        </div>
        <div className="about-image-container">
          <img src={aboutImg} alt="Background" className="about-img" />
        </div>
        <div className="description">
          <p>
            TNC Group is a leading provider of innovative technology solutions for businesses worldwide. With a focus on delivering cutting-edge software products and services, we empower organizations to thrive in today's digital landscape.
          </p>
          <p>
            Our team of skilled professionals is dedicated to exceeding client expectations by delivering customized solutions tailored to their specific needs. Whether it's software development, IT consulting, or digital transformation initiatives, TNC Group is committed to driving success for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
