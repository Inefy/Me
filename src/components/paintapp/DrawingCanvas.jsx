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

  const handleMouseMove = (event) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = event.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    setLines((currentLines) => {
      const lastLine = currentLines[currentLines.length - 1];
      return [
        ...currentLines.slice(0, -1),
        {
          ...lastLine,
          points: [...lastLine.points, pointerPosition.x, pointerPosition.y],
        },
      ];
    });
  };

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
        onMouseMove={handleMouseMove}

        onTouchStart={() => {
          isDrawing.current = true;
        }}
        onTouchEnd={() => {
          isDrawing.current = false;
          onDrawingEnd();
        }}
        onTouchMove={handleMouseMove}
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