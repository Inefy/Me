import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Line, Circle, Rect, Star, Path } from 'react-konva';
import Konva from 'konva';
import './DrawingCanvas.css';

const DrawingCanvas = ({
  selectedColor,
  selectedThickness,
  selectedBrushStyle,
  selectedShape,
  deselectShape,
}) => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [shapes, setShapes] = useState([]);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 });
  const [isDragging, setIsDragging] = useState(false);
  const sprayDensity = useRef(50); // Define a variable for spray density

  const addShape = (newShape) => {
    setShapes((prevShapes) => [...prevShapes, newShape]);
  };

  useEffect(() => {
    const handleResize = () => {
      // Store the existing shapes and lines with their old canvas size
      const oldShapes = [...shapes];
      const oldLines = [...lines];

      const newCanvasSize = { width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 };
      setCanvasSize(newCanvasSize);

    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [lines, shapes]);

  const handleMouseMove = (event) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = event.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    const addPoints = (pointsArray) => { // Change addPoints to accept an array of points
      setLines((currentLines) => {
        const lastLine = currentLines[currentLines.length - 1];
        const newPoints = [...lastLine.points, ...pointsArray];
        return [
          ...currentLines.slice(0, -1),
          {
            ...lastLine,
            points: newPoints,
          },
        ];
      });
    };

    switch (selectedBrushStyle) {
      case 'spray':
        const r = selectedThickness / 2;
        const sprayPoints = [];
        for (let i = 0; i < sprayDensity.current; i++) { // Use sprayDensity for the number of dots
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * r;
          const rx = pointerPosition.x + radius * Math.cos(angle);
          const ry = pointerPosition.y + radius * Math.sin(angle);
          sprayPoints.push(rx, ry);
        }
        addPoints(sprayPoints);
        break;
      case 'eraser':
        addPoints([pointerPosition.x, pointerPosition.y]);
        break;
      default:
        addPoints([pointerPosition.x, pointerPosition.y]);
        break;
    }
  };

  const handleMouseDown = (event) => {
    if (event.target instanceof Konva.Stage) {
      deselectShape();

      if (selectedShape && !isDragging) {
        const stage = event.target.getStage();
        const pointerPosition = stage.getPointerPosition();
        const newShapeProps = {
          x: pointerPosition.x,
          y: pointerPosition.y,
          fill: selectedColor,
          draggable: true,
        };

        switch (selectedShape) {
          case 'circle':
            addShape({ type: 'circle', ...newShapeProps, radius: selectedThickness });
            break;
          case 'square':
            addShape({ type: 'rect', ...newShapeProps, width: selectedThickness, height: selectedThickness });
            break;
          case 'star':
            addShape({
              type: 'star',
              ...newShapeProps,
              numPoints: 5,
              innerRadius: selectedThickness,
              outerRadius: selectedThickness * 2,
            });
            break;
          case 'heart':
            addShape({
              type: 'path',
              ...newShapeProps,
              data: 'M5.34,0C2.39,0,0,2.39,0,5.34c0,4.23,5.34,8.52,5.34,8.52S10.67,9.57,10.67,5.34C10.67,2.39,8.29,0,5.34,0z',
              scale: { x: selectedThickness / 5, y: selectedThickness / 5 },
            });
            break;
          default:
            break;
        }
      } else {
        isDrawing.current = true;
        setLines([
          ...lines,
          {
            color: selectedColor,
            thickness: parseFloat(selectedThickness),
            points: [],
            isEraser: selectedBrushStyle === 'eraser', // Add this line
          },
        ]);
      }
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="drawing-canvas">
      <Stage
        ref={stageRef}
        width={canvasSize.width}
        height={canvasSize.height}
        onMouseDown={handleMouseDown}
        onMouseUp={() => {
          isDrawing.current = false;
        }}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={() => {
          isDrawing.current = false;
        }}
        onTouchMove={handleMouseMove}
      >
        <Layer ref={layerRef}>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.isEraser ? 'white' : line.color} // Update this line
              strokeWidth={line.thickness}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={line.isEraser ? 'destination-out' : 'source-over'} // Update this line
            />
          ))}

          {shapes.map((shape, i) => {
            switch (shape.type) {
              case 'circle':
                return <Circle key={`shape-${i}`} {...shape} onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd} />;
              case 'rect':
                return <Rect key={`shape-${i}`} {...shape} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />;
              case 'star':
                return <Star key={`shape-${i}`} {...shape} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />;
              case 'path':
                return <Path key={`shape-${i}`} {...shape} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />;
              default:
                return null;
            }
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default DrawingCanvas;

