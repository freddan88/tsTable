import Table from "../../shared/components/Table/Table";
import useTestPageTable from "./hooks/useTestPageTable";

export default function UserPage() {
  const { data, columns } = useTestPageTable();

  return <Table table={{ columns, data }} />;
}
