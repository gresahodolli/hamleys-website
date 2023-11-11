
import React from 'react';
import '../style.css';
import button1 from '../assets/Shop1.png';
import button2 from '../assets/Shop2.png';
import button3 from '../assets/Shop3.png';
import button4 from '../assets/Shop4.png';

const ImageButton = ({ imageSrc, altText, onClick }) => {
    return (
      <button className="image-button" onClick={onClick}>
        <img className="image-button-img" src={imageSrc} alt={altText} />
      </button>
    );
  };

const ImageButtonsContainer = () => {
  const handleButtonClick = (buttonName) => {
    
    console.log(`${buttonName} button clicked`);
  };

  return (
    <div className="image-buttons-container">
      <ImageButton
        imageSrc={button1} 
        altText="Button 1"
        onClick={() => handleButtonClick('Button 1')}
      />
      <ImageButton
        imageSrc={button2} 
        altText="Button 2"
        onClick={() => handleButtonClick('Button 2')}
      />
      <ImageButton
        imageSrc={button3} 
        altText="Button 3"
        onClick={() => handleButtonClick('Button 3')}
      />
      <ImageButton
        imageSrc={button4} 
        altText="Button 4"
        onClick={() => handleButtonClick('Button 4')}
      />
    </div>
  );
};

export default ImageButtonsContainer;
