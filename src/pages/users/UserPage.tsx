import Table from "../../shared/components/Table/Table";
import { Outlet, useNavigate } from "react-router-dom";
import useUserPageTable from "./hooks/useUserPageTable";
import Shelf2 from "../../shared/components/shelf/Shelf2";
import Shelf from "../../shared/components/shelf/Shelf";
import Shelf3 from "../../shared/components/shelf/Shelf3";

export default function UserPage() {
  const { isLoading, data, columns } = useUserPageTable();

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/", {
      preventScrollReset: true,
      replace: true,
    });
  };

  const getShelfId = () => {
    if (window.location.pathname.length > 0) {
      const param = window.location.pathname.split("/")[1];
      return Number.isNaN(parseInt(param)) ? undefined : param;
    }
  };

  return (
    <>
      <Table table={{ columns, data, loading: isLoading }} />
      <Shelf3 onClose={handleClose} id={getShelfId()} />
      <Outlet />
    </>
  );
}
