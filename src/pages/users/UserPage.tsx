import Table from "../../components/Table/Table";
import { Outlet } from "react-router-dom";
import useUserPageTable from "./hooks/useUserPageTable";

export default function UserPage() {
  const { columns, data } = useUserPageTable();

  return (
    <>
      <Table table={{ columns, data }} />
      <Outlet />
    </>
  );
}
