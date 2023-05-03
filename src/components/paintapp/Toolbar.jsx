import React from 'react';
import ColorPicker from './ColorPicker';
import BrushStylePicker from './BrushStylePicker';
import ThicknessSlider from './ThicknessSlider';
import ShapesPicker from './ShapesPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './Toolbar.css';

const Toolbar = ({ onColorChange, onBrushStyleChange, onThicknessChange, onShapeSelect, onSave }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-section">
        <h3>Brush Styles</h3>
        <BrushStylePicker onChange={onBrushStyleChange} />
      </div>
      <div className="toolbar-section">
        <h3>Colors</h3>
        <ColorPicker onChange={onColorChange} />
      </div>
      <div className="toolbar-section">
        <h3>Shapes</h3>
        <ShapesPicker onSelect={onShapeSelect} />
      </div>
      <div className="toolbar-section">
        <h3>Thickness</h3>
        <ThicknessSlider onChange={onThicknessChange} />
      </div>
      <div className="toolbar-section">
        <h3>Save</h3>
        <button className="save-button" onClick={onSave}>
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;