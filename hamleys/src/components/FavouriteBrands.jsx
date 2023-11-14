import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style.css'

import Brands1 from '../assets/Brands1.png';
import Brands2 from '../assets/Brands2.png';
import Brands3 from '../assets/Brands3.png';
import Brands4 from '../assets/Brands4.png';
import Brands5 from '../assets/Brands5.png';
import Brands6 from '../assets/Brands6.png';
import Brands7 from '../assets/Brands7.png';
import Brands8 from '../assets/Brands8.png';

const toysData = [
  { imageSrc: Brands1 },
  { imageSrc: Brands2 },
  { imageSrc: Brands3 },
  { imageSrc: Brands4 },
  { imageSrc: Brands5 },
  { imageSrc: Brands6 },
  { imageSrc: Brands7 },
  { imageSrc: Brands8 },
];

const h1Style = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  fontSize: '40px',
  fontWeight: 'bold',
  color: '#333',
  padding: '20px',
  marginTop: '60px',
  marginBottom: '1px',
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  color: 'red',
  background: 'black',
  padding: '6px',
  borderRadius: '50%',
  width: '30px', 
  height: '30px',
};

const FavouriteBrands = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (toy) => {
    setCart([...cart, toy]);
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...arrowStyle, right: '10px' }}
        onClick={onClick}
      ></div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...arrowStyle, left: '10px', zIndex: '1' }}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <h1 style={h1Style}>Hamleys Top 10 Toys</h1>
      <div className='button-container'>
        <button
          className='button'
          type='button'
          onClick={() => {
            /* Handle button click */
          }}
        >
          Shop All Brands
        </button>
      </div>
      <Slider {...settings}>
        {toysData.map((toy, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              display: 'inline-block',
              margin: '0 50px',
              position: 'relative',
            }}
          >
            <button
              onClick={() => handleButtonClick(toy)}
              style={{
                border: 'none',
                padding: '0',
                margin: '0',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              <img
                src={toy.imageSrc}
                alt={toy.title}
                className='card-img-top'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'box-shadow 0.3s',
                }}
              />
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FavouriteBrands;