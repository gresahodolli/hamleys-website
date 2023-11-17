import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style.css'

import Character1 from '../assets/Character1.png';
import Character2 from '../assets/Character2.png';
import Character3 from '../assets/Character3.png';
import Character4 from '../assets/Character4.png';
import Character5 from '../assets/Character5.jpg';
import Character7 from '../assets/Character7.jpg';
import Character8 from '../assets/Character8.jpg';


const toysData = [
  { imageSrc: Character1 },
  { imageSrc: Character2 },
  { imageSrc: Character3 },
  { imageSrc: Character4 },
  { imageSrc: Character5 },
  { imageSrc: Character7 },
  { imageSrc: Character8 },
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
      <h1 style={h1Style}>Favorite Categories</h1>
      <div className='button-container'>
        <button
          className='button'
          type='button'
          onClick={() => {
            /* Handle button click */
          }}
        >
          Shop All Characters
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