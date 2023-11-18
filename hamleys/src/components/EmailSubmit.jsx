import React from 'react';
import './styles/YourComponent.css'; 
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const NewsletterSignup = () => {
  return (
    <div className="newsletter-container">
      <img
        className="centered-logo"
        src="https://hamleys.co.za/wp-content/uploads/2021/12/cropped-logo-4-2.png"
        alt="Hamleys Logo"
      />
      <p className="newsletter-text">
        Our newsletters are packed full of special offers, new toys, events, competitions, and all the latest in the magical world of toys.
      </p>
      <label htmlFor="email" className="email-label">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        className="email-input"
      />
      <p className="disclaimer-text">
        *By submitting your email address, you agree to receive marketing emails from Hamleys. Click here to read our privacy policy & terms and conditions.
      </p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
      </div>
    </div>
  );
};

export default NewsletterSignup;
