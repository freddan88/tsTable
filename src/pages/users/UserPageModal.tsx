import { useParams, useNavigate } from "react-router-dom";
import Modal from "../../shared/components/modal/Modal";
import useUserPageModal from "./hooks/useUserPageModal";
import { RouteParams } from "./helpers/userPage.types";

export default function UserPageModal() {
  const { id, action } = useParams<RouteParams>();

  const navigate = useNavigate();

  const response = useUserPageModal({ id, action });

  console.log(response);

  const handleClose = () => {
    navigate("/", {
      preventScrollReset: true,
      replace: true,
    });
  };

  return (
    <Modal onClose={handleClose}>
      <div>{id}</div>
      <footer className="py-2 flex justify-between items-center justify-self-end">
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </footer>
    </Modal>
  );
}
