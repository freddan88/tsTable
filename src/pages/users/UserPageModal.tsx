import { useParams, useNavigate } from "react-router-dom";
import Modal from "../../shared/components/modal/Modal";
import useUserPageModal from "./hooks/useUserPageModal";

export default function UserPageModal() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const response = useUserPageModal({ id: params.id });

  const handleClose = () => {
    navigate("/", {
      preventScrollReset: true,
      replace: true,
    });
  };

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
