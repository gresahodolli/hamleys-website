import React, { useState } from 'react';
import './styles/NavbarStyle.css';

const Navbar = () => {
    const [logoSize, setLogoSize] = useState({ width: '100px', height: '50px' });
    const [logoSrc, setLogoSrc] = useState('https://hamleys.co.za/wp-content/uploads/2021/12/cropped-logo-4-2.png');

    const handleLogoHover = () => {
        setLogoSrc('https://upload.wikimedia.org/wikipedia/commons/3/38/Hamleys_logo.png');
        setLogoSize({ width: '200px', height: '200px' }); 
    };

    const handleLogoLeave = () => {
        setLogoSrc('https://hamleys.co.za/wp-content/uploads/2021/12/cropped-logo-4-2.png');
        // setLogoSize({ width: '100px', height: '50px' });
    };

  return (
    <div className="double-navbar">
      {/* First Row */}
      <div className="first-row">
        <div className="left-links">
          <ul>
          <li><i className="bi bi-flag"></i> Great Britain </li>
          <li><i className="bi bi-geo-alt"></i> Find a store</li>
          <li><i className="bi bi-calendar"></i> What's on </li>
          </ul> 
        </div>
        <div className="right-links">
          <ul>
            <li><i className="bi bi-truck"></i> Track Order Shipment</li>
            <li><i className="bi bi-emoji-laughing"></i> Sign In/Register</li>
            <li><i className="bi bi-bag"></i> My Bag</li>
          </ul>
        </div>
      </div>
      {/* Second Row */}
      <div className="second-row" onMouseEnter={handleLogoHover} onMouseLeave={handleLogoLeave}>
        <div className="logo-container">
          <img src={logoSrc} alt="Logo" className="logo-image" />
        </div>
        <div className="dropdown-menu">
          <ul>
            <li>Shop toys</li>
            <li>Christmas</li>
            <li>By Age</li>
            <li>By brand</li>
            <li>Gaming</li>
            <li>
              Black Friday
              <ul className="dropdown">
                <li>Deal 1</li>
                <li>Deal 2</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
