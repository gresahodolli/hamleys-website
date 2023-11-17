// GiftFinder.jsx
import React from 'react';
import GiftFinderImage from '../assets/GiftFinder.jpg';
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
const GiftFinderComponent = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <section style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={h1Style}>Gift Finder</h1>
      <img
        src={GiftFinderImage}
        alt="Gift Finder"
        style={{ width: '100%', maxWidth: '1000px', height: 'auto' }}
      />
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'white',
          color: 'red',
          border: 'bold',
          borderRadius: '10px',
          cursor: 'pointer',
          zIndex:'-1',
          marginLeft: '-200px',
        }}
        onClick={handleButtonClick}
      >
        Explore Gift Ideas
      </button>
    </section>
  );
};

export default GiftFinderComponent;
