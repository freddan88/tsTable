import { ReactNode } from "react";
import ReactDOM from "react-dom";

type PortalTypes = {
  children: ReactNode;
};

export default function Portal({ children }: PortalTypes) {
  return ReactDOM.createPortal(
    children,
    document.getElementById("portal-root")!
  );
}
