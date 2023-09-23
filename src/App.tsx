import { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import TableColumnsApi from "./components/Table/helpers/TableColumnsApi";
import { UserResponse } from "./components/Table/helpers/tableTypes";

function App() {
  const [data, setData] = useState<UserResponse[]>([]);
  const [modal, setModal] = useState<UserResponse>();

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((json: UserResponse[]) => setData(json))
      .catch((error) => console.error(error));
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!modal) return;
    console.log(modal);
  }, [modal]);

  return (
    <div className="max-w-4xl mx-auto">
      <Table
        table={{
          columns: TableColumnsApi({ setModal }),
          data: data,
        }}
      />
    </div>
  );
}

export default App;
