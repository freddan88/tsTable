import Table from "../../shared/components/Table/Table";
import { Outlet } from "react-router-dom";
import useUserPageTable from "./hooks/useUserPageTable";

export default function UserPage() {
  const { data, columns } = useUserPageTable();

  return (
    <>
      <Table table={{ columns, data }} />
      <Outlet />
    </>
  );
}
