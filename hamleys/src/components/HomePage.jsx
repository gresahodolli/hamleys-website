import React from 'react';
import Hamleys from '../assets/Hamleys.webp';
import Hamleys1 from '../assets/Hamleys1.jpg';
import Hamleys2 from '../assets/Hamleys2.jpg';

function HomePage() {
 
  const imageStyle = {
    margin:'30px',
    height: '600px',  
    width: '100%',    
    objectFit: 'cover',
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ maxWidth: '1500px' }}>
        <div className="carousel-inner">
          <div className="carousel-item active d-flex justify-content-center align-items-center">
            <img src={Hamleys} className="d-block" alt="Hamleys Carousel 1" style={imageStyle} />
          </div>
          <div className="carousel-item d-flex justify-content-center align-items-center">
            <img src={Hamleys1} className="d-block" alt="Hamleys Carousel 2" style={imageStyle} />
          </div>
          <div className="carousel-item d-flex justify-content-center align-items-center">
            <img src={Hamleys2} className="d-block" alt="Hamleys Carousel 3" style={imageStyle} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
