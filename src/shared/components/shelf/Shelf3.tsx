import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  MutableRefObject,
  PropsWithChildren,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const MIN_WIDTH = 15;
const OPEN_WIDTH = window.outerWidth / 3;

type Shelf3Props = {
  id?: string;
  onClose?: () => void;
};

export default function Shelf3({
  children,
  onClose,
  id,
}: PropsWithChildren<Shelf3Props>) {
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

  useEffect(() => {
    if (!id) return;
    setPositionX(OPEN_WIDTH);
  }, [id]);

  return (
    <div
      style={{ transform: `translateX(calc(100% - ${positionX}px))` }}
      className="fixed inset-0 bg-slate-200 z-50 flex"
    >
      <div
        className="h-full flex flex-col justify-between select-none"
        style={{ width: MIN_WIDTH }}
      >
        <button
          onClick={() => {
            const value = positionX <= MIN_WIDTH ? OPEN_WIDTH : MIN_WIDTH;
            if (onClose) onClose();
            setPositionX(value);
          }}
        >
          {positionX <= MIN_WIDTH ? <MdChevronLeft /> : <MdChevronRight />}
        </button>
        <button
          ref={handleElement}
          className="h-64 bg-slate-400 cursor-ew-resize"
        />
        <hr />
      </div>
      <section className="flex-1 p-4">
        <h2>Details</h2>
        {children}
      </section>
    </div>
  );
}
