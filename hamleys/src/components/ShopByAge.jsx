import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageButtonsContainer1 from './ImageButtonsContainer1';

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

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

    if (e && e.direction) {
      setVisibleItems(selectedIndex + 2);
    } else {
      setVisibleItems(Math.min(selectedIndex + 2, visibleItems));
    }
  };

  const handleSliderChange = (value) => {
    setIndex(value);
  };

  return (
    <div>
      <h1 style={h1Style}>Shop By Age</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {[0, 1, 2, 3].map((itemIndex) => (
          <Carousel.Item key={itemIndex}>
            {itemIndex >= index && itemIndex < index + visibleItems && (
              <ImageButtonsContainer1 />
            )}
          </Carousel.Item>
        ))}
      </Carousel>

      <div style={{ width: '50%', margin: '20px auto',marginBottom:'100px' }}>
        <Slider
          min={0}
          max={5}
          step={1}
          value={index}
          onChange={handleSliderChange}
          railStyle={{ backgroundColor: '#ddd', height: 10 }}
          trackStyle={{ backgroundColor: 'red', height: 10 }}
          handleStyle={{
            borderColor: 'black',
            height: 40,
            width: 40,
            marginLeft: -10,
            marginTop: -15,
            backgroundColor: 'red',
          }}
        />
      </div>
    </div>
  );
};

export default MyCarousel;
