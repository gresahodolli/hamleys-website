import React from 'react';
import './styles/NavbarStyle.css';

const Navbar = () => {
  return (
    <div className="double-navbar">
      {/* First Row */}
      <div className="first-row">
        <div className="left-links">
          <ul>
          <li><i class="bi bi-flag"></i> Great Britain </li>
          <li><i class="bi bi-geo-alt"></i> Find a store</li>
          <li><i class="bi bi-calendar"></i> What's on </li>
          </ul> 
        </div>
        <div className="right-links">
          <ul>
            <li><i class="bi bi-truck"></i> Track Order Shipment</li>
            <li><i class="bi bi-emoji-laughing"></i> Sign In/Register</li>
            <li><i class="bi bi-bag"></i> My Bag</li>
          </ul>
        </div>
      </div>
      {/* Second Row */}
      <div className="second-row">
        <div className="logo">Logo</div>
        <div className="dropdown-menu">
          <ul>
            <li>Shop toys</li>
            <li>Christmas</li>
            <li>By Age</li>
            <li>By brand</li>
            <li>Gaming</li>
            <li>Black Friday</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
