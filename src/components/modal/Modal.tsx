import { ReactNode } from "react";

type ModalType = {
  children: ReactNode;
};

export default function Modal({ children }: ModalType) {
  return <div>{children}</div>;
}
