import React from 'react';
import '../style.css';

function MultipleToggles() {
  return (
    <div>
      <h1>The Finest Toy Shop in the World.</h1>
      <h3>
        Our expert toy-testers have been hard at work to select the ultimate gifts for teeny toddlers, tech-loving pre-teens, and everyone in between!
      </h3>
      <div className="button-container">
        <p className="d-inline-flex gap-1">
          <button className=" button" type="button" onClick={() => {}}>
            Shop All Toys
          </button>
          <button className="button" type="button" onClick={() => {}}>
            Shop New Year
          </button>
          <button className="button" type="button" onClick={() => {}}>
            Shop Top 10 Toys
          </button>
        </p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Shop Early Black Friday Deals Now</h1>
        <button className="button" type="button" onClick={() => {}}>
          Shop All Offers
        </button>
      </div>
    </div>
  );
}

export default MultipleToggles;
