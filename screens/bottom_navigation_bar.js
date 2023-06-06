import React, { useState } from 'react';
import HomePage from './HomePage';
import Favorite from './Favorite';

function bottom_navigation_bar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screens = [
    <HomePage />,
    <Favorite />,
  ];

  const handleTabChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      {screens[currentIndex]}
      <nav>
        <ul>
          <li>
            <button onClick={() => handleTabChange(0)}>
              Home
              <i className="material-icons">home</i>
            </button>
          </li>
          <li>
            <button onClick={() => handleTabChange(1)}>
              Favorite
              <i className="material-icons">favorite</i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default bottom_navigation_bar;
