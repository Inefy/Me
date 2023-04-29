import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { Button, ButtonGroup, Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 4,
        borderRadius: '20px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        Retro Painting Canvas
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 2,
        }}
      >
        <ButtonGroup variant="contained" sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <Button onClick={handleUndo} color="primary">
            Undo
          </Button>
          <Button onClick={handleClear} color="error">
            Clear
          </Button>
          <Button onClick={toggleColorPicker} color="info">
            Color Picker
          </Button>
        </ButtonGroup>
        {colorPickerVisible && (
          <Box
            sx={{
              position: 'absolute',
              zIndex: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderRadius: '5px',
            }}
          >
            <ChromePicker color={brushColor} onChange={handleColorChange} />
            <Button
              onClick={toggleColorPicker}
              variant="contained"
              color="primary"
              sx={{ marginTop: 1, borderRadius: '5px' }}
            >
              Confirm Color
            </Button>
          </Box>
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
      </Box>
      <Box
        sx={{
          border: '2px solid #333',
          borderRadius: '10px',
          marginTop: 1,
          marginBottom: 1,
          overflow: 'hidden',
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
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(8, 1fr)',
          gap: '0.5rem',
          width: '100%',
          marginTop: 1,
        }}
      >
        {defaultColors.map((color) => (
          <Button
            key={color}
            onClick={() => handleColorChange({ hex: color })}
            sx={{
                backgroundColor: color,
                width: '100%',
                height: '2rem',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            ></Button>
          ))}
        </Box>
      </Box>
    );
  };
  
  export default PaintingCanvas;
