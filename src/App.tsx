import Table from "./components/Table/Table";
import { tableColumns } from "./components/Table/helpers/TableColumns";
import { tableData } from "./components/Table/helpers/tableData";

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <Table
        table={{
          columns: tableColumns,
          data: tableData,
        }}
      />
    </div>
  );
}

export default App;
