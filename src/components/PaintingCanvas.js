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


  const defaultColors = [
    '#000000', '#808080', '#FF0000', '#800000',
    '#FFFFFF', '#C0C0C0', '#FFFF00', '#808000',
    '#00FF00', '#008000', '#00FFFF', '#008080',
    '#0000FF', '#000080', '#FF00FF', '#800080',
    '#FFFF80', '#808040', '#00FF80', '#004040',
    '#80FFFF', '#0080FF', '#8080FF', '#004080',
    '#FF0080', '#8000FF', '#FF8040', '#804000',
  ];

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
            <Button
              onClick={toggleColorPicker}
              variant="contained"
              color="primary"
              sx={{ marginTop: 1 }}
            >
              Confirm Color
            </Button>
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
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {defaultColors.map((color) => (
          <Button
            key={color}
            onClick={() => handleColorChange({ hex: color })}
            sx={{
              backgroundColor: color,
              width: '10%',
              height: '2rem',
              margin: '0.25rem',
            }}
          ></Button>
        ))}
      </div>
    </div>
  );
};

export default PaintingCanvas;