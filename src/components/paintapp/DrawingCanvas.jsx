import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Line, Circle, Rect, Star, Path } from 'react-konva';
import Konva from 'konva';
import './DrawingCanvas.css';

const DrawingCanvas = ({
  selectedColor,
  selectedThickness,
  selectedBrushStyle,
  selectedShape,
}) => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [shapes, setShapes] = useState([]);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 });
  const [isDragging, setIsDragging] = useState(false);

  const addShape = (newShape) => {
    setShapes((prevShapes) => [...prevShapes, newShape]);
  };

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (event) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = event.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    const addPoints = (x, y) => {
      setLines((currentLines) => {
        const lastLine = currentLines[currentLines.length - 1];
        return [
          ...currentLines.slice(0, -1),
          {
            ...lastLine,
            points: [...lastLine.points, x, y],
          },
        ];
      });
    };



    switch (selectedBrushStyle) {
      case 'spray':
        const r = selectedThickness / 2;
        for (let i = 0; i < 6 + r / 5; i++) {
          const rx = (Math.random() * 2 - 1) * r;
          const ry = (Math.random() * 2 - 1) * r;
          const d = rx * rx + ry * ry;
          if (d <= r * r) {
            addPoints(pointerPosition.x + Math.floor(rx), pointerPosition.y + Math.floor(ry));
          }
        }
        break;
      default:
        addPoints(pointerPosition.x, pointerPosition.y);
        break;
    }
  };

  const handleMouseDown = (event) => {
    if (event.target instanceof Konva.Stage) {
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
            addShape({ type: 'rect', ...newShapeProps, width: selectedThickness * 2, height: selectedThickness * 2 });
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
              stroke={line.color}
              strokeWidth={line.thickness}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                selectedBrushStyle === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
          {shapes.map((shape, i) => {
            switch (shape.type) {
              case 'circle':
                return <Circle key={`shape-${i}`} {...shape} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />;
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
