import React, { useState } from 'react';
import BrushStylesPicker from './BrushStylesPicker';
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
  
    return (
      <div className="paint-page">
        <Toolbar>
          <ColorPicker color={selectedColor} setColor={setSelectedColor} />
          <BrushStylesPicker
            selectedBrushStyle={selectedBrushStyle}
            setSelectedBrushStyle={setSelectedBrushStyle}
          />
          <ShapesPicker selectedShape={selectedShape} setSelectedShape={setSelectedShape} />
          <ThicknessSlider thickness={selectedThickness} setThickness={setSelectedThickness} />
        </Toolbar>
        <DrawingCanvas
          selectedColor={selectedColor}
          selectedThickness={selectedThickness}
          selectedBrushStyle={selectedBrushStyle}
          selectedShape={selectedShape}
        />
      </div>
    );
  };
  
  export default PaintPage;