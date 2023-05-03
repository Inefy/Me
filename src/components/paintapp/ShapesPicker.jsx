import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquare, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ShapesPicker.css';

const shapes = [
  { id: 'circle', name: 'Circle', icon: faCircle },
  { id: 'square', name: 'Square', icon: faSquare },
  { id: 'star', name: 'Star', icon: faStar },
  { id: 'heart', name: 'Heart', icon: faHeart },
];

const ShapesPicker = ({ onSelect }) => {
  const handleShapeSelect = (shapeId) => {
    onSelect(shapeId);
  };

  return (
    <div className="shapes-picker">
      {shapes.map((shape) => (
        <button
          key={shape.id}
          className="shape-button"
          title={shape.name}
          onClick={() => handleShapeSelect(shape.id)}
        >
          <FontAwesomeIcon icon={shape.icon} />
        </button>
      ))}
    </div>
  );
};

export default ShapesPicker;