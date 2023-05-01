import React from 'react';
import { GithubPicker } from 'react-color';

const ColorSelector = ({ defaultColors, handleColorChange }) => {
    return (
        <GithubPicker
            colors={defaultColors}
            width="100%"
            onChangeComplete={handleColorChange}
        />
    );
};

export default ColorSelector;