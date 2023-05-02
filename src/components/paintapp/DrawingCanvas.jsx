import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import './DrawingCanvas.css';

const DrawingCanvas = ({
  brushStyle,
  color,
  thickness,
  shape,
  onNewObjectAdded,
  onDrawingEnd,
}) => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);


  return (
    <div className="drawing-canvas">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={() => {
          isDrawing.current = true;
        }}
        onMouseUp={() => {
          isDrawing.current = false;
          onDrawingEnd();
        }}
        onMouseMove={(e) => {
          // Handle mouse move for drawing
        }}
        onTouchStart={() => {
          isDrawing.current = true;
        }}
        onTouchEnd={() => {
          isDrawing.current = false;
          onDrawingEnd();
        }}
        onTouchMove={(e) => {
          // Handle touch move for drawing
        }}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line key={i} points={line.points} stroke={line.color} strokeWidth={line.thickness} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default DrawingCanvas;