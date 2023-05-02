import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './ColorPicker.css';

const ColorPicker = ({ onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState('#000000');

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setColor(newColor.hex);
    onChange(newColor.hex);
  };

  return (
    <div className="color-picker">
      <div className="swatch" onClick={handleClick}>
        <div className="color" style={{ backgroundColor: color }} />
      </div>
      {displayColorPicker ? (
        <div className="popover">
          <div className="cover" onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
