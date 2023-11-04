import React, { useState } from 'react';
import '../App.scss';
import '../scss/theme/themeSombre.scss';
import '../scss/theme/themeClair.scss'; 

const ThemeButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleTheme = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('default-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('default-theme');
    }
  };

  return (
    <div className={`theme-button-container ${isClicked ? 'clicked' : ''}`} onClick={toggleTheme}>
      <div className="theme-icon sun">
        <span role="img" aria-label="Sun">
          🌞
        </span>
      </div>
      <div className={`theme-icon moon ${isClicked ? 'hide' : ''}`}>
        <span role="img" aria-label="Moon">
          🌙
        </span>
      </div>
      <div className={`theme-overlay ${isClicked ? 'move' : ''}`} />
    </div>
  );
};

export default ThemeButton;



