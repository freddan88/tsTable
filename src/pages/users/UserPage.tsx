import Table from "../../shared/components/Table/Table";
import { Outlet } from "react-router-dom";
import useUserPageTable from "./hooks/useUserPageTable";
import Shelf2 from "../../shared/components/shelf/Shelf2";
import Shelf from "../../shared/components/shelf/Shelf";
import Shelf3 from "../../shared/components/shelf/Shelf3";

export default function UserPage() {
  const { isLoading, data, columns } = useUserPageTable();

  return (
    <>
      <Table table={{ columns, data, loading: isLoading }} />
      <Shelf3 />
      <Outlet />
    </>
  );
}
