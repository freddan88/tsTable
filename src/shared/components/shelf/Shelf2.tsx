import { MouseEvent, useCallback, useEffect, useState } from "react";

const MIN_WIDTH = 15;

export default function Shelf2() {
  const [startPosition, setStartPosition] = useState(0);
  const [positionX, setPositionX] = useState(MIN_WIDTH);
  const [isDraggable, setIsDraggable] = useState(false);

  const handleDraggableStop = useCallback(() => {
    setIsDraggable(false);
    setStartPosition(0);
  }, []);

  const handleResizablePanel = useCallback(
    (e: globalThis.MouseEvent) => {
      const newPosition = window.innerWidth - (e.clientX - startPosition);
      const boundRestrictionLeft = newPosition >= window.innerWidth;
      const boundRestrictionRight = newPosition <= MIN_WIDTH;
      if (boundRestrictionLeft || boundRestrictionRight) {
        handleDraggableStop();
      } else {
        setPositionX(newPosition);
      }
    },
    [startPosition, handleDraggableStop]
  );

  const handleDraggableStart = (e: MouseEvent<HTMLButtonElement>) => {
    const initial = e.clientX - e.currentTarget.getBoundingClientRect().x;
    setStartPosition(initial);
    setIsDraggable(true);
  };

  useEffect(() => {
    if (isDraggable) {
      window.addEventListener("mousemove", handleResizablePanel);
      window.addEventListener("mouseup", handleDraggableStop);
    } else {
      window.removeEventListener("mousemove", handleResizablePanel);
      window.removeEventListener("mouseup", handleDraggableStop);
    }
    return () => {
      window.removeEventListener("mousemove", handleResizablePanel);
      window.removeEventListener("mouseup", handleDraggableStop);
    };
  }, [isDraggable, handleResizablePanel, handleDraggableStop]);

  return (
    <section
      style={{ transform: `translateX(calc(100% - ${positionX}px))` }}
      className="fixed inset-0 bg-slate-200 z-50"
    >
      <div
        className="h-full flex flex-col justify-center select-none"
        style={{ width: MIN_WIDTH }}
      >
        <button
          data-mousedown={isDraggable}
          onMouseDown={handleDraggableStart}
          className="h-64 bg-slate-400 data-[mousedown=true]:cursor-ew-resize cursor-pointer"
        ></button>
      </div>
    </section>
  );
}
