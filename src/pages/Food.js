import React, { useState } from 'react';
import './Food.css';
import { Link } from 'react-router-dom';
import salad1 from '../assets/Copy.png';
import salad2 from '../assets/Food22.png';
import salad3 from '../assets/FoodTopViewPngJpgBlackAndWhite.png';
import salad4 from '../assets/R.png';
import salad5 from '../assets/Salad2.png';
import salad6 from '../assets/food1.png';
import salad7 from '../assets/food2.png';
import salad8 from '../assets/food3.png';
import arrowImage from '../assets/arrow.png';
import logo from '../assets/logo.png';
import dashed from '../assets/dash.png';
import lock from '../assets/lock.png';

const foodItems = [salad1, salad2, salad3, salad4, salad5, salad6, salad7, salad8];
const colors = ['#FEA150','#68cc8b', '#FF8C00', '#5CAC0E', '#FF8989', '#9468cc', '#6a68cc', '#6890cc', '#68b9cc', '#68ccb5', '#5CAC0E', '#FF8989'];
// '#6890cc'background: #FF8989;background: #FEA150;background: #5CAC0E;background: #FF8989;

export default function Food() {
  const [selectedIndex, setSelectedIndex] = useState(4);
  const [circleColor, setCircleColor] = useState(colors[0]);
  const [clickCount, setClickCount] = useState(0);

  const rotateRight = () => {
    setClickCount((prevCount) => prevCount + 1);
    setSelectedIndex((prevIndex) => {
      const newIndex = clickCount % 3 === 2 
        ? (prevIndex - 2 + foodItems.length) % foodItems.length 
        : (prevIndex + 1) % foodItems.length;
      setCircleColor(colors[newIndex]);
      return newIndex;
    });
  };

  const rotateLeft = () => {
    setClickCount((prevCount) => prevCount + 1);
    setSelectedIndex((prevIndex) => {
      const newIndex = clickCount % 3 === 2 
        ? (prevIndex + 2) % foodItems.length 
        : (prevIndex - 1 + foodItems.length) % foodItems.length;
      setCircleColor(colors[newIndex]);
      return newIndex;
    });
  };

  return (
    <div className="main">
      <div className="header">
        <div className='nav-logo'>
          <img src={logo} alt="Logo" />
          <p>FoodHunt</p>
        </div>
        <ul className="nav-menu">
          <li><Link>Breakfast</Link></li>
          <li><Link>Launch</Link></li>
          <li><Link>Dinner</Link></li>
          <li><Link><img className="lock" src={lock} alt='lock'/></Link></li>
        </ul>
      </div>
      <div className="circle-container">
        <div className="circle-wrapper"  style={{ backgroundColor: circleColor}}>
          {foodItems.map((food, index) => (
            <img
              key={index}
              src={food}
              alt={`Food ${index + 1}`}
              className={`small-food-item ${index === selectedIndex ? 'selected' : ''}`}
              style={{
                transform: `rotate(${(index - selectedIndex) * 45}deg) translate(180%) rotate(${-(index - selectedIndex) * 45}deg)`,
              }}
            />
          ))}
          <img className='dashed' src={dashed} alt='dashed' />
        </div>
      </div>

      <div className="center-circle">
        <img
          src={foodItems[selectedIndex]}
          alt="Selected Food"
          className="selected-food"
        />
      </div>

      <div className="arrows">
        <button
          onClick={rotateLeft}
          className="arrow left"
          style={{ backgroundColor: circleColor }}
        >
          <img className='arrl' src={arrowImage} alt="Left Arrow" style={{ width: '25px', height: '25px' }} />
        </button>
        <button
          onClick={rotateRight}
          className="arrow right"
          style={{ backgroundColor: circleColor }}
        >
          <img className='right' src={arrowImage} alt="Right Arrow" style={{ width: '25px', height: '25px' }} />
        </button>
      </div>

      <div className="right-content">
        <h1 style={{ color: circleColor }}>Delicious</h1>
        <h2>Quench the Hunger</h2>
        <p>Indulge in flavors that satisfy your cravings. From rich, savory dishes to sweet treats, every bite is crafted to delight your taste buds. Our meals are not only delicious but also nourishing, ensuring you feel satisfied and energized. Dive into a world of taste and let every meal quench your hunger.</p>
        <button style={{ backgroundColor: circleColor }} className="cta-button">Quench now</button>
      </div>
    </div>
  );
}
