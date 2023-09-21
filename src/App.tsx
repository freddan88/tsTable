import { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import { tableColumns } from "./components/Table/helpers/TableColumns";
import { tableData } from "./components/Table/helpers/tableData";
import { tableColumnsApi } from "./components/Table/helpers/TableColumnsApi";

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function App() {
  const [data, setData] = useState<UserResponse[]>();

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

  if (!data) return;

  return (
    <div className="max-w-4xl mx-auto">
      <Table
        table={{
          columns: tableColumnsApi,
          data: data,
        }}
      />
    </div>
  );
}

export default App;
