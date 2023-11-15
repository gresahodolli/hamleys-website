import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style.css';
import Lego1 from '../assets/Lego1.png';
import Lego2 from '../assets/Lego2.png';
import Lego3 from '../assets/Lego3.png';
import Lego4 from '../assets/Lego4.png';
import Lego5 from '../assets/Lego5.png';
import Lego6 from '../assets/Lego6.png';

const toysData = [
  { imageSrc: Lego1 },
  { imageSrc: Lego2 },
  { imageSrc: Lego3 },
  { imageSrc: Lego4 },
  { imageSrc: Lego5 },
  { imageSrc: Lego6 },
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

const LegoStore = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (toy) => {
    setCart([...cart, toy]);
  };

  const handleButtonClick = (toy) => {
    addToCart(toy);
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
      <h1 style={h1Style}>LEGO Store at Hamleys</h1>
      <div className="button-container">
        <p className="d-inline-flex gap-1">
          <button className=" button" type="button" onClick={() => {}}>
            Shop New Arrivals for LEGO
          </button>
          <button className="button" type="button" onClick={() => {}}>
            LEGO Gift Finder
          </button>
          <button className="button" type="button" onClick={() => {}}>
            Shop The Range
          </button>
        </p>
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
                className="card-img-top"
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

export default LegoStore;
