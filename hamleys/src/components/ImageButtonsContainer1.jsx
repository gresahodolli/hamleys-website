
import React from 'react';
import '../style.css';
import button11 from '../assets/ShopByAge1.png';
import button21 from '../assets/ShopByAge2.png';
import button31 from '../assets/ShopByAge3.png';
import button41 from '../assets/ShopByAge4.png';
// import button51 from '../assets/ShopByAge5.png';
// import button61 from '../assets/ShopByAge6.png';

const ImageButton = ({ imageSrc, altText, onClick }) => {
    return (
      <button className="image-button" onClick={onClick}>
        <img className="image-button-img" src={imageSrc} alt={altText} />
      </button>
    );
  };

const ImageButtonsContainer1 = () => {
  const handleButtonClick = (buttonName) => {
    
    console.log(`${buttonName} button clicked`);
  };

  return (
    <div className="image-buttons-container">
      <ImageButton
        imageSrc={button11} 
        altText="Button 1"
        onClick={() => handleButtonClick('Button 1')}
      />
      <ImageButton
        imageSrc={button21} 
        altText="Button 2"
        onClick={() => handleButtonClick('Button 2')}
      />
      <ImageButton
        imageSrc={button31} 
        altText="Button 3"
        onClick={() => handleButtonClick('Button 3')}
      />
      <ImageButton
        imageSrc={button41} 
        altText="Button 4"
        onClick={() => handleButtonClick('Button 4')}
      />
      {/* <ImageButton
        imageSrc={button51} 
        altText="Button 5"
        onClick={() => handleButtonClick('Button 5')}
      />
      <ImageButton
        imageSrc={button61} 
        altText="Button 6"
        onClick={() => handleButtonClick('Button 6')}
      /> */}
    </div>
  );
};

export default ImageButtonsContainer1;
