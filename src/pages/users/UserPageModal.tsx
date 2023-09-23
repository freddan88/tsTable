import { useParams, useNavigate } from "react-router-dom";
import useBasePath from "../../shared/hooks/useBasePath";
import Modal from "../../shared/components/modal/Modal";
import { useCallback } from "react";

export default function UserPageModal() {
  const params = useParams<{ id: string }>();
  const basePath = useBasePath(params);
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate(basePath, {
      preventScrollReset: true,
      replace: true,
    });
  }, [basePath, navigate]);

  return (
    <Modal onClose={handleClose}>
      <div>{params.id}</div>
      <footer className="py-2 flex justify-between items-center justify-self-end">
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </footer>
    </Modal>
  );
}
