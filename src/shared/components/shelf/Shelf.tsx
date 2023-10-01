import { useRef, MouseEvent, useState } from "react";

const MIN_WIDTH = 15;

export default function Shelf() {
  const [positionX, setPositionX] = useState(MIN_WIDTH);
  const [canMove, setCanMove] = useState(false);

  const diffX = useRef(0);

  const handleDragStop = () => {
    diffX.current = 0;
    setCanMove(false);
  };

  const handleShelfDragUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    if (canMove) {
      const newPosition = window.innerWidth - (e.screenX - diffX.current);
      if (newPosition >= window.innerWidth) handleDragStop();
      if (newPosition <= MIN_WIDTH) handleDragStop();
      setPositionX(newPosition);
    }
  };

  const handleShelfDragSetup = (e: MouseEvent<HTMLButtonElement>) => {
    diffX.current = e.screenX - e.currentTarget.getBoundingClientRect().left;
    setCanMove(true);
  };

  return (
    <div
      className="fixed inset-0 bg-slate-200 z-50"
      style={{ transform: `translateX(calc(100% - ${positionX}px))` }}
    >
      <div
        className="h-full flex flex-col justify-center select-none"
        style={{ width: MIN_WIDTH }}
      >
        <button
          className="h-64 bg-slate-400 cursor-w-resize"
          onMouseDown={handleShelfDragSetup}
          onMouseMove={handleShelfDragUpdate}
          onMouseLeave={() => handleDragStop()}
          onMouseUp={() => handleDragStop()}
        ></button>
      </div>
    </div>
  );
}