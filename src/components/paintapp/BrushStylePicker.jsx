import React from 'react';
import './BrushStylePicker.css';

const brushStyles = [
  { id: 'pencil', name: 'Pencil' },
  { id: 'brush', name: 'Brush' },
  { id: 'spray', name: 'Spray' },
];

const BrushStylePicker = ({ onChange }) => {
  const handleBrushStyleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="brush-style-picker">
      <select onChange={handleBrushStyleChange}>
        {brushStyles.map((style) => (
          <option key={style.id} value={style.id}>
            {style.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrushStylePicker;