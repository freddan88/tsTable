import { CellProps, ColumnType, TableRowType } from "./tableTypes";

export const tableColumns: ColumnType[] = [
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
    id: "b663a957-3eb1-48b2-b3eb-ec9c9d4dcc0c",
    Header: "Last Name",
    accessor: "last_name",
    sortable: false,
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
