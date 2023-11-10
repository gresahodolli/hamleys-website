import React from 'react';

function MultipleToggles() {
  const h1Style = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    padding: '20px',
  };

  const h3Style = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    color: '#666',
    padding: '10px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#d9534f',
    border: 'none',
    color: 'white',
    padding: '16px 32px',
    textAlign: 'center',
    fontSize: '16px',
    margin: '8px 30px',
    transition: '0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: 'red',
    color: 'white',
  };

  return (
    <div>
      <h1 style={h1Style}>The Finest Toy Shop in the World.</h1>
      <h3 style={h3Style}>
        Our expert toy-testers have been hard at work to select the ultimate gifts for teeny toddlers, tech-loving pre-teens, and everyone in between!
      </h3>
      <div style={buttonContainerStyle}>
        <p className="d-inline-flex gap-1">
          <button
            className="btn btn-primary"
            type="button"
            style={{ ...buttonStyle, ...buttonHoverStyle }}
            onClick={() => {}}
          >
            Shop All Toys
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{ ...buttonStyle, ...buttonHoverStyle }}
            onClick={() => {}}
          >
            Shop New Year
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{ ...buttonStyle, ...buttonHoverStyle }}
            onClick={() => {}}
          >
            Shop Top 10 Toys
          </button>
        </p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={h1Style}>Shop Early Black Friday Deals Now</h1>
        <button
          className="btn btn-primary"
          type="button"
          style={{ ...buttonStyle, ...buttonHoverStyle }}
          onClick={() => {}}
        >
          Shop All Offers
        </button>
      </div>
    </div>
  );
}

export default MultipleToggles;
