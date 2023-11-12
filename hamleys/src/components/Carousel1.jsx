import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CarouselStyle.css'

const CarouselComponent = () => {
  const carouselData = [
    { text: "Pay With Klarna", icon: "bi bi-credit-card-2-back-fill" },
    { text: "Free Standard Delivery On Orders over $35", icon: "bi bi-truck" },
    { text: "Receive your delivery in more than 2000 Parcel Shop Location", icon: "bi bi-geo-alt" },
    { text: "Need helping your a Toy?", icon: "bi bi-life-preserver" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  const containerStyle = {
    position: 'relative',
    backgroundColor: '#ddd',
    padding: '10px',
    marginTop: '85px', 
    marginBottom:'25px'
  };

  const itemStyle = {
    color: 'black',
  };

  const textStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '20px',
  };

  const iconStyle = {
    color: 'red',
    fontSize: '30px', // Adjust the font size as needed
    marginRight: '20px',
    marginBottom: '5px',
  };

  return (
    <div className="carousel-container" style={containerStyle}>
      <Carousel>
        {carouselData.map((item, index) => (
          <Carousel.Item key={index} style={itemStyle}>
            <p style={textStyle}>
              <i className={item.icon} style={iconStyle} />
              {item.text}
            </p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
