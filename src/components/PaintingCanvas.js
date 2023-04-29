import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { Button, ButtonGroup, Slider, Typography } from '@mui/material';
import { ChromePicker } from 'react-color';

const PaintingCanvas = () => {
  const canvasDrawRef = useRef();
  const [brushColor, setBrushColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(2);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  const handleUndo = () => {
    if (canvasDrawRef.current) {
      canvasDrawRef.current.undo();
    }
  };

  const handleClear = () => {
    if (canvasDrawRef.current) {
      canvasDrawRef.current.clear();
    }
  };

  const handleColorChange = (color) => {
    setBrushColor(color.hex);
  };

  const handleSizeChange = (event, newValue) => {
    setBrushSize(newValue);
  };

  const toggleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#C0C0C0',
        padding: 2,
        borderRadius: '5px',
      }}
    >
      <Typography variant="h5">Retro Painting Canvas</Typography>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <ButtonGroup>
          <Button onClick={handleUndo} variant="contained" color="primary">
            Undo
          </Button>
          <Button onClick={handleClear} variant="contained" color="secondary">
            Clear
          </Button>
          <Button onClick={toggleColorPicker} variant="contained">
            Color Picker
          </Button>
        </ButtonGroup>
        {colorPickerVisible && (
          <div
            sx={{
              position: 'absolute',
              zIndex: 2,
            }}
          >
            <ChromePicker color={brushColor} onChange={handleColorChange} />
          </div>
        )}
        <Slider
          value={brushSize}
          onChange={handleSizeChange}
          min={1}
          max={20}
          valueLabelDisplay="auto"
          aria-label="Brush size"
          color="primary"
        />
      </div>
      <div
        sx={{
          border: '2px solid black',
          marginTop: 1,
          marginBottom: 1,
        }}
      >
        <CanvasDraw
          ref={canvasDrawRef}
          brushColor={brushColor}
          brushRadius={brushSize}
          canvasWidth={window.innerWidth * 0.8}
          canvasHeight={window.innerHeight * 0.6}
          lazyRadius={0}
        />
      </div>
    </div>
  );
};

export default PaintingCanvas;
