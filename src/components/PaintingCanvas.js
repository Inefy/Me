import React, { useRef, useEffect, useState } from 'react';
import { Button, ButtonGroup, Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { fabric } from 'fabric';
import BrushTypeSelector from './BrushTypeSelector';
import ColourSelector from './ColourSelector';

const PaintingCanvas = () => {
    const canvasRef = useRef();
    const [canvas, setCanvas] = useState(null);
    const [brushColor, setBrushColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(2);
    const [brushType, setBrushType] = useState('PencilBrush');

    useEffect(() => {
        if (!canvasRef.current) return;
        const newCanvas = new fabric.Canvas(canvasRef.current, {
            isDrawingMode: true,
        });
        setCanvas(newCanvas);
    }, []);

    useEffect(() => {
        if (!canvas) return;
        const brush = new fabric[brushType](canvas);
        brush.color = brushColor;
        brush.width = brushSize;
        brush.strokeLineCap = 'round';
        brush.strokeLineJoin = 'round';
        canvas.freeDrawingBrush = brush;
    }, [canvas, brushColor, brushSize, brushType]);

    const handleBrushTypeChange = (event) => {
        setBrushType(event.target.value);
    };

    const handleUndo = () => {
        if (!canvas) return;
        const lastObject = canvas._objects.pop();
        if (lastObject) {
            canvas.remove(lastObject);
            canvas.renderAll();
        }
    };

    const handleClear = () => {
        if (!canvas) return;
        canvas.clear();
    };

    const handleColorChange = (color) => {
        setBrushColor(color.hex);
    };

    const handleSizeChange = (event, newValue) => {
        setBrushSize(newValue);
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
                Paint something!
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
                </ButtonGroup>
                <BrushTypeSelector brushType={brushType} handleBrushTypeChange={handleBrushTypeChange} />
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
                <canvas
                    ref={canvasRef}
                    width={window.innerWidth * 0.8}
                    height={window.innerHeight * 0.6}
                />
            </Box>
            <ColourSelector defaultColors={defaultColors} handleColorChange={handleColorChange} />
        </Box>
    );
};
export default PaintingCanvas;