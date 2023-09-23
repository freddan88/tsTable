import { useParams, useNavigate } from "react-router-dom";
import useBasePath from "../../shared/hooks/useBasePath";
import Modal from "../../shared/components/modal/Modal";
import { useCallback } from "react";
import useUserPageModal from "./hooks/useUserPageModal";

export default function UserPageModal() {
  const params = useParams<{ id: string }>();
  const basePath = useBasePath(params);
  const navigate = useNavigate();

  const { isLoading, data } = useUserPageModal({ id: params.id });

  console.log(isLoading, data);

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
