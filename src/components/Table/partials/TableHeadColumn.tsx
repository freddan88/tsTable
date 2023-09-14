import { ColumnType } from "../helpers/tableTypes";

export interface TableHeadColumnProps {
  columns: ColumnType[];
  column: ColumnType;
  columnIndex: number;
}

export default function TableHeadColumn({
  columnIndex,
  columns,
  column,
}: TableHeadColumnProps) {
  const renderContent = () => {
    if (typeof column.Header === "function") {
      return column.Header({
        columnIndex,
        columns,
        column,
      });
    }
    return column.Header;
  };

  return (
    <th scope="col" className="px-6 py-3">
      {renderContent()}
    </th>
  );
}