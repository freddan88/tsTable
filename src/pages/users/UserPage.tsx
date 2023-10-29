import Table from "../../shared/components/Table/Table";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useUserPageTable from "./hooks/useUserPageTable";
import Shelf2 from "../../shared/components/shelf/Shelf2";
import Shelf from "../../shared/components/shelf/Shelf";
import Shelf3 from "../../shared/components/shelf/Shelf3";

export default function UserPage() {
  const { isLoading, data, columns } = useUserPageTable();

  const navigate = useNavigate();

  const { id, action } = useParams<{ id: string; action: string }>();

  const shelfId = action ? undefined : id;

  const handleClose = () => {
    navigate("/", {
      preventScrollReset: true,
      replace: true,
    });
  };

  return (
    <>
      <Table table={{ columns, data, loading: isLoading }} />
      <Shelf3 onClose={handleClose} id={shelfId} />
      <Outlet />
    </>
  );
}
