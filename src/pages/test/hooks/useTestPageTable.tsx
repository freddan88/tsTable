import {
  CellProps,
  ColumnTypes,
} from "../../../shared/components/Table/helpers/table.types";
import { TableRowType } from "../helpers/testPage.types";

export default function useTestPageTable() {
  const columns: ColumnTypes<TableRowType> = [
    {
      id: "597096fc-a117-427b-855c-51c28c691df0",
      Header: "First Name",
      accessor: "first_name",
      sortable: false,
      visibilityMenu: {
        label: "First Name",
      },
    },
    {
      id: "33318573-51ab-4f5a-bf4e-cdb47779630f",
      Header: "Last Name",
      accessor: "last_name",
      sortable: false,
      visibilityMenu: {
        label: "Last Name",
      },
    },
    {
      id: "da3be3d7-e3e7-4a26-87ba-70ac37bc0c0f",
      Header: null,
      accessor: "id",
      sortable: false,
      Cell: (props: CellProps<TableRowType>) => {
        return <button onClick={() => console.log(props)}>Delete</button>;
      },
    },
  ];

  const data: TableRowType[] = [
    {
      id: "6ce2ded8-10dc-4130-b0b6-aa5fa291f5f0",
      first_name: "Person_1",
      last_name: "One",
      age: 32,
    },
    {
      id: "f4d15326-1432-4f11-a243-8349b81d908b",
      first_name: "Person_2",
      last_name: "Two",
      age: null,
    },
  ];

  return { columns, data };
}
