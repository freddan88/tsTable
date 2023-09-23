import { CellProps, ColumnTypes, TableRowType } from "./table.types";

export const tableColumns: ColumnTypes<TableRowType> = [
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
