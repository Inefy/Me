import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPaintBrush, faSprayCan, faHighlighter, faEraser } from '@fortawesome/free-solid-svg-icons';
import './BrushStylePicker.css';

const brushStyles = [
  { id: 'pencil', name: 'Pencil', icon: faPencilAlt },
  { id: 'brush', name: 'Brush', icon: faPaintBrush },
  { id: 'spray', name: 'Spray', icon: faSprayCan },
  { id: 'marker', name: 'Marker', icon: faHighlighter },
  { id: 'eraser', name: 'Eraser', icon: faEraser },
];

const BrushStylePicker = ({ onChange }) => {
  const handleBrushStyleChange = (brushStyle) => {
    onChange(brushStyle);
  };

  return (
    <div className="brush-style-picker">
      {brushStyles.map((style) => (
        <button
          key={style.id}
          className="brush-style-button"
          onClick={() => handleBrushStyleChange(style.id)}
          title={style.name}
        >
          <FontAwesomeIcon icon={style.icon} />
        </button>
      ))}
    </div>
  );
};

export default BrushStylePicker;
