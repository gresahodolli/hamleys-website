import React from 'react';
import '../style.css';
import Construction from '../assets/Construction.png';
import Construction2 from '../assets/Construction2.png';
import Construction3 from '../assets/Construction3.png';
import Construction4 from '../assets/Construction4.png';
import Construction5 from '../assets/Construction5.png';
import Construction6 from '../assets/Construction6.png';
import Construction7 from '../assets/Construction7.png';
import Construction8 from '../assets/Construction.png';

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

const cardsData = [
  { title: 'Construction', buttonText: 'Show Now', imageSrc: Construction },
  { title: 'Soft Toys', buttonText: 'Show Now', imageSrc: Construction2 },
  { title: 'PreSchool', buttonText: 'Show Now', imageSrc: Construction3 },
  { title: 'Action Toys & Vehicles', buttonText: 'Show Now', imageSrc: Construction4 },
  { title: 'Games & Puzzles', buttonText: 'Show Now', imageSrc: Construction5 },
  { title: 'Dolls', buttonText: 'Show Now', imageSrc: Construction6 },
  { title: 'Arts & Crafts', buttonText: 'Show Now', imageSrc: Construction7 },
  {title: 'Sports & Leisure', buttonText: 'Show Now', imageSrc: Construction8 },
];

function FavoriteCategories() {
  return (
    <div>
      <h1 style={h1Style}>Favourite Categories</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imageSrc} className="card-img-top" alt={`Card ${index + 1}`} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <div className="button-container">
                <a href="#" className="button">
                  {card.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteCategories;
