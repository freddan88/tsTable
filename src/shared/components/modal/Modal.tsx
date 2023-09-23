import { ReactNode } from "react";

type ModalType = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalType) {
  return (
    <div
      data-testid="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-80"
      onClick={onClose}
    >
      <section
        data-testid="modal-main"
        className="bg-slate-200 rounded-md p-4 max-w-[800px] mx-auto mt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="py-2 flex justify-between items-center">
          <h2>Test...</h2>
          <button type="button" onClick={onClose}>
            &#x2716;
          </button>
        </header>
        {children}
      </section>
    </div>
  );
}
