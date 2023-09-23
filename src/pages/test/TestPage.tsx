import Table from "../../components/Table/Table";
import useTestPageTable from "./hooks/useTestPageTable";

export default function UserPage() {
  const { columns, data } = useTestPageTable();

  return <Table table={{ columns, data }} />;
}
