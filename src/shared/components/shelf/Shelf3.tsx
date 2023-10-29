import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const MIN_WIDTH = 15;

export default function Shelf3() {
  const [positionX, setPositionX] = useState(MIN_WIDTH);

  const handleElement: RefObject<HTMLButtonElement> = useRef(null);
  const initialPosition: MutableRefObject<undefined | number> = useRef();

  const handleResizablePanelMove = useCallback((e: globalThis.MouseEvent) => {
    if (typeof initialPosition.current === "number") {
      const initial = initialPosition.current;
      const position = window.innerWidth - (e.clientX - initial);
      const boundRestrictionLeft = position >= window.innerWidth;
      const boundRestrictionRight = position <= MIN_WIDTH;
      if (boundRestrictionLeft || boundRestrictionRight) return;
      setPositionX(position);
    }
  }, []);

  const handleResizablePanelStop = useCallback(() => {
    window.removeEventListener("mousemove", handleResizablePanelMove);
    window.removeEventListener("mouseup", handleResizablePanelStop);
  }, [handleResizablePanelMove]);

  const handleResizablePanelStart = useCallback(
    (e: globalThis.MouseEvent) => {
      if (handleElement.current) {
        if (e.target !== handleElement.current) return;
        const handle = handleElement.current;
        const initial = e.clientX - handle.getBoundingClientRect().x;
        initialPosition.current = initial;
        window.addEventListener("mousemove", handleResizablePanelMove);
        window.addEventListener("mouseup", handleResizablePanelStop);
      }
    },
    [handleResizablePanelMove, handleResizablePanelStop]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleResizablePanelStart);
    return () => {
      window.removeEventListener("mousedown", handleResizablePanelStart);
      handleResizablePanelStop();
    };
  }, [handleResizablePanelStart, handleResizablePanelStop]);

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
          ref={handleElement}
          className="h-64 bg-slate-400 cursor-ew-resize"
        ></button>
      </div>
    </section>
  );
}
