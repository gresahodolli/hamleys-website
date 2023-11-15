import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiHeart } from 'react-icons/bi';
import '../style.css'

// Import images for the top toys
import BestSelling1 from '../assets/BestSelling1.png';
import BestSelling2 from '../assets/BestSelling2.png';
import BestSelling3 from '../assets/BestSelling3.png';
import BestSelling4 from '../assets/BestSelling4.png';
import BestSelling5 from '../assets/BestSelling5.png';
import BestSelling6 from '../assets/BestSelling6.png';
import BestSelling7 from '../assets/BestSelling7.png';
import BestSelling8 from '../assets/BestSelling8.png';

const h1Style = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#333',
  padding: '20px',
  marginTop: '60px',
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
  { title: 'Lego', imageSrc: BestSelling1, price: 20 },
  { title: 'Lego', imageSrc: BestSelling2, price: 30 },
  { title: 'Lego', imageSrc: BestSelling3, price: 20 },
  { title: 'Lego', imageSrc: BestSelling4, price: 30 },
  { title: 'Lego', imageSrc: BestSelling5, price: 20 },
  { title: 'Lego', imageSrc: BestSelling6, price: 30 },
  { title: 'Lego', imageSrc: BestSelling7, price: 20 },
  { title: 'Lego', imageSrc: BestSelling8, price: 30 },
];

const BestSelling = () => {
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
    padding: '6px',
    borderRadius: '50%',
    width: '30px',
    height: '30px',

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
      <h1 style={h1Style}>Shop Best Selling LEGO</h1>
      <Slider {...settings}>
        {toysData.map((toy, index) => (
          <div key={index} className="card1" style={{ width: '8rem', display: 'inline', margin: '10px', position: 'relative' }}>
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

export default BestSelling;
