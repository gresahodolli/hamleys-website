import React, { useState } from 'react';
import './styles/NavbarStyle.css';

const Navbar = () => {
  const [logo, setLogo] = useState({
    src: 'https://hamleys.co.za/wp-content/uploads/2021/12/cropped-logo-4-2.png',
    size: { width: '100px', height: '50px' }
  });

  const handleLogoHover = () => {
    setLogo({
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Hamleys_logo.png',
      size: { width: '150px', height: '65px' }
    });
  };

  const handleLogoLeave = () => {
    setLogo({
      src: 'https://hamleys.co.za/wp-content/uploads/2021/12/cropped-logo-4-2.png',
      size: { width: '100px', height: '50px' }
    });
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
          <img src={logo.src} alt="Logo" className="logo-image" style={logo.size} />
        </div>
        <div className="other-items-nav">
        <ul class="main-menu">
          <li>Shop toys
            <ul className='dropdown'>
              <li>
                <ul>By Price
                  <li>$20 and Under</li>
                  <li>$20 to $50</li>
                  <li>$20 to $100</li>
                  <li>$100 and Above</li>
                </ul>
              </li>
              <li>
                <ul>Games & Puzzles
                  <li>Board Game</li>
                  <li>Other Games</li>
                  <li>Puzzles</li>
                </ul>
              </li>
              <li>
                <ul>Lego and Construction
                  <li>Lego</li>
                  <li>Playmobil</li>
                  <li>$20 to $100</li>
                  <li>Other Constraction</li>
                </ul>
              </li>
              <li>
                <ul>Soft toys
                  <li>Hamleys</li>
                  <li>Animals</li>
                  <li>Teddy Bears</li>
                  <li>Plush figures</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Christmas</li>
          <li>By Age
          <ul class="dropdown">
              <li><img 
                    src="https://www.steiff.com/img/1800/2232/resize/catalog/product/s/o/soft-cuddly-friends-jimmy-teddybaer-113512-4.jpg" 
                    alt="0-12 months" 
                    style={{ width: '70px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px', color:'black'}}>0-12 months</p></li>
              <li><img 
                    src="https://rukminim1.flixcart.com/image/850/1000/kt1u3rk0/stuffed-toy/b/7/r/4-feet-red-teddy-bear-120-kiddietown-original-imag6h7vhw2mfwvj.jpeg?q=90" 
                    alt="1-2 years" 
                    style={{ width: '60px', height: '60px', color:'black' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px' }}>1-2 years</p></li>
              <li><img 
                    src="https://i.ebayimg.com/images/g/q3QAAOSwUNhjK06u/s-l1600.jpg" 
                    alt="3-4 years" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px', color:'black' }}>3-4 years</p></li>
              <li><img 
                    src="https://5.imimg.com/data5/SELLER/Default/2021/8/CX/JC/AN/14770395/die-1-500x500.jpg" 
                    alt="5-6 years" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px', color:'black' }}>5-6 years</p></li>
              <li><img 
                    src="https://www.conisbroughcastle.org.uk/images/toys/playmobil-knights-castle.jpg" 
                    alt="7-9 years" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px',color:'black' }}>7-9 years</p></li>
              <li>
              <img 
                    src="https://i.pinimg.com/564x/a2/55/36/a25536443db807c5264221f1ea1511f5.jpg" 
                    alt="10+" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px', color:'black' }}>10+</p>
              </li>
            </ul>
          </li>
          <li>By brand
          <ul class="dropdown">
              <li>
              <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Lego_logo.png" 
                    alt="lego" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
              </li>
              <li>
              <img 
                    src="https://www.thats-mine.co.uk/wp-content/uploads/2019/02/jellycat-2.jpg" 
                    alt="yellyCat" 
                    style={{ width: '60px', height: '60px' }}
                  />
              </li>
              <li>
              <img 
                    src="https://i0.wp.com/magzoid.com/wp-content/uploads/2021/11/disney-logo-2.jpg?fit=684%2C482&ssl=1" 
                    alt="disney" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
              </li>
              <li>
              <img 
                    src="https://mystickermania.com/cdn/stickers/harry-potter/harry-potter-title-512x512.png" 
                    alt="harryPotter" 
                    style={{ width: '60px', height: '60px' }}
                  />
              </li>
              <li>
              <img 
                    src="https://logowik.com/content/uploads/images/barbie3338.logowik.com.webp" 
                    alt="barbie" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
              </li>
            </ul>
          </li>
          <li>Gaming</li>
          <li>Black Friday</li>         
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
