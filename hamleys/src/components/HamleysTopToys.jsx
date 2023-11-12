import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiHeart } from 'react-icons/bi';
import '../style.css'

// Import images for the top toys
import toy1 from '../assets/toy1.png';
import toy2 from '../assets/toy2.png';
import toy3 from '../assets/toy3.png';
import toy4 from '../assets/toy4.png';
import toy5 from '../assets/toy5.png';
import toy6 from '../assets/toy6.png';
import toy7 from '../assets/toy7.png';
import toy8 from '../assets/toy8.png';

const h1Style = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#333',
  padding: '20px',
  marginTop: '20px',
  marginBottom: '1px',
};

const h1TopToy = {
  fontSize: '20px',
  backgroundColor: '#D2691E',
  marginRight: '240px',
  padding: '3px',
  color: 'white',
};

const toysData = [
  { title: 'Hamlays', imageSrc: toy1, price: 20 },
  { title: 'Hamlays', imageSrc: toy2, price: 30 },
  { title: 'Hamlays', imageSrc: toy3, price: 20 },
  { title: 'Hamlays', imageSrc: toy4, price: 30 },
  { title: 'Hamlays', imageSrc: toy5, price: 20 },
  { title: 'Hamlays', imageSrc: toy6, price: 30 },
  { title: 'Hamlays', imageSrc: toy7, price: 20 },
  { title: 'Hamlays', imageSrc: toy8, price: 30 },
];

const HamleysTopToys = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (toy) => {
    setCart([...cart, toy]);
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ ...arrowStyle, right: '10px',  }} onClick={onClick}>
       
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ ...arrowStyle, left: '10px',zIndex:'1' }} onClick={onClick}>
      </div>
    );
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: 'red',
    background: 'black',
    padding: '1px',
    borderRadius: '50%',

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
      <Slider {...settings}>
        {toysData.map((toy, index) => (
          <div key={index} className="card1" style={{ width: '8rem', display: 'inline', margin: '10px', position: 'relative' }}>
            <h1 style={h1TopToy}>Top 10 Toy</h1>
            <img
              src={toy.imageSrc}
              alt={toy.title}
              className="card-img-top"
              style={{ width: '60%', maxHeight: 'auto', objectFit: 'cover', marginLeft: '60px', transition: 'box-shadow 0.3s' }}
            />
            <div className="card-body">
              <h5 className="card-title">{toy.title}</h5>
              <p>${toy.price}</p>
              <button onClick={() => addToCart(toy)} className='button'>
                Add to Cart
              </button>
              <BiHeart className='heart' style={{ color: 'red', fontSize: '30px', marginLeft: '-30px' }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HamleysTopToys;
