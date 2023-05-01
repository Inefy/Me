import React from 'react';
import { MenuItem, Select } from '@mui/material';

const BrushTypeSelector = ({ brushType, handleBrushTypeChange }) => {
    return (
        <Select
            value={brushType}
            onChange={handleBrushTypeChange}
            variant="outlined"
            size="small"
        >
            <MenuItem value="PencilBrush">Pencil Brush</MenuItem>
            <MenuItem value="SprayBrush">Spray Brush</MenuItem>
            <MenuItem value="CircleBrush">Circle Brush</MenuItem>
        </Select>
    );
};

export default BrushTypeSelector;