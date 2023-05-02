import React from 'react';
import './ThicknessSlider.css';

const ThicknessSlider = ({ onChange }) => {
  const handleThicknessChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="thickness-slider">
      <input type="range" min="1" max="100" defaultValue="10" onChange={handleThicknessChange} />
    </div>
  );
};

export default ThicknessSlider;