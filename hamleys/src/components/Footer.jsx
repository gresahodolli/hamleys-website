import React from 'react';
import './styles/YourFooter.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
       
        <h3>Shopping Online</h3>
        <a href="#">Gift Finder</a>
        <a href="#">Gift Cards/Balance</a>
        <a href="#">Event Reminders</a>
      </div>

      <div className="footer-section">
        <h3>Stores & Events</h3>
        <a href="#">What’s on</a>
        <a href="#">London Regent Street</a>
        <a href="#">London Bridge</a>
        <a href="#">St Pancras</a>
        <a href="#">Westfield</a>
        <a href="#">Airports</a>
        <a href="#">Glasgow</a>
      </div>

      <div className="footer-section">
        <h3>About us</h3>
        <a href="#">Hamleys History</a>
        <a href="#">Careers at Hamleys</a>
        <a href="#">Sitemap</a>
      </div>

      <div className="footer-section">
        <h3>Legals</h3>
        <a href="#">Legal Information</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Cookie Settings</a>
        <a href="#">Modern Slavery Statement</a>
        <a href="#">Gender Pay Statement</a>
        <a href="#">Supplier transparency</a>
      </div>

      <div className="footer-section">
        <h3>Customer Services</h3>
        <a href="#">Help desk</a>
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
        <a href="#">Delivery</a>
        <a href="#">Returns</a>
        <a href="#">Product Recalls</a>
        <a href="#">Klarna FAQs</a>
      </div>
    </footer>
  );
};

export default Footer;
