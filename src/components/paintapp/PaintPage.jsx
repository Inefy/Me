import React, { useState } from 'react';
import BrushStylesPicker from './BrushStylePicker';
import ColorPicker from './ColorPicker';
import ShapesPicker from './ShapesPicker';
import ThicknessSlider from './ThicknessSlider';
import Toolbar from './Toolbar';
import DrawingCanvas from './DrawingCanvas';
import './PaintPage.css';

const PaintPage = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedThickness, setSelectedThickness] = useState(5);
  const [selectedBrushStyle, setSelectedBrushStyle] = useState('normal');
  const [selectedShape, setSelectedShape] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleBrushStyleChange = (style) => {
    setSelectedBrushStyle(style);
  };

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };

  const handleThicknessChange = (thickness) => {
    setSelectedThickness(thickness);
  };

  const deselectShape = () => {
    setSelectedShape(null);
  };

  const handleSave = () => {
    // Implement save functionality here
  };

  return (
    <div className="paint-page">
      <Toolbar
        onColorChange={handleColorChange}
        onBrushStyleChange={handleBrushStyleChange}
        onShapeSelect={handleShapeSelect}
        onThicknessChange={handleThicknessChange}
        onSave={handleSave}
      />
      <DrawingCanvas
        selectedColor={selectedColor}
        selectedThickness={selectedThickness}
        selectedBrushStyle={selectedBrushStyle}
        deselectShape={deselectShape}
        selectedShape={selectedShape}
      />
    </div>
  );
};

export default PaintPage;