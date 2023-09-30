import Table from "../../shared/components/Table/Table";
import { Outlet } from "react-router-dom";
import useUserPageTable from "./hooks/useUserPageTable";

export default function UserPage() {
  const { isLoading, data, columns } = useUserPageTable();

  console.log(isLoading);

  return (
    <>
      <Table table={{ columns, data, loading: isLoading }} />
      <Outlet />
    </>
  );
}
