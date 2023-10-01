import { MouseEvent, useState } from "react";

const MIN_WIDTH = 15;
const OPEN_WIDTH = window.outerWidth / 3;

export default function Shelf() {
  const [startPosition, setStartPosition] = useState(0);
  const [positionX, setPositionX] = useState(MIN_WIDTH);
  const [isDraggable, setIsDraggable] = useState(false);

  const handleDraggableStop = () => {
    setIsDraggable(false);
    setStartPosition(0);
  };

  const handleDraggableUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDraggable) {
      const newPosition = window.innerWidth - (e.clientX - startPosition);
      const boundRestrictionLeft = newPosition >= window.innerWidth;
      const boundRestrictionRight = newPosition <= MIN_WIDTH;
      if (boundRestrictionLeft || boundRestrictionRight) {
        handleDraggableStop();
      } else {
        setPositionX(newPosition);
      }
    }
  };

  const handleDraggableStart = (e: MouseEvent<HTMLButtonElement>) => {
    const initial = e.clientX - e.currentTarget.getBoundingClientRect().x;
    setStartPosition(initial);
    setIsDraggable(true);
  };

  return (
    <div
      style={{ transform: `translateX(calc(100% - ${positionX}px))` }}
      className="fixed inset-0 bg-slate-200 z-50"
    >
      <div
        className="h-full flex flex-col justify-between select-none"
        style={{ width: MIN_WIDTH }}
      >
        <button
          onClick={() => {
            const value = positionX <= MIN_WIDTH ? OPEN_WIDTH : MIN_WIDTH;
            setPositionX(value);
          }}
        >
          {positionX <= MIN_WIDTH ? "O" : "C"}
        </button>
        <button
          className="h-64 bg-slate-400 cursor-w-resize"
          onMouseMove={handleDraggableUpdate}
          onMouseDown={handleDraggableStart}
          onMouseLeave={handleDraggableStop}
          onMouseUp={handleDraggableStop}
        ></button>
        <hr />
      </div>
    </div>
  );
}
