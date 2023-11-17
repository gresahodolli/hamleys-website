import React from 'react';
import photo from '../assets/photo.jpg';
import '../style.css'

function FinestToys() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px', marginTop:'50px' }}>
        <img src={photo} alt="Toy Image" style={{ width: '600px', height: '400px' }} />
      </div>
      <div style={{ flex: 1, textAlign: 'right',marginTop:'50px',marginRight:'150px' }}>
        <h1>Delivering The Finest Toys Since 1760</h1>
        <h3>
          The toys may have changed, but if he were here today, we're sure William Hamley would recognise the same delighted faces as he guided you round the shop he dreamt of as a boy.
        </h3>
        <div style={{marginRight:'100px'}}>
        <button className='button' onClick={() => console.log('Button 1 clicked')}>Find a Store</button>
        <button className='button' onClick={() => console.log('Button 2 clicked')}>What's In-Store</button>
        </div>
      </div>
    </div>
  );
}

export default FinestToys;
