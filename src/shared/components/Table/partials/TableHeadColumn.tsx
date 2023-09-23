import { ColumnType } from "../helpers/table.types";

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
  const testId = `table-head-column-${columnIndex + 1}`;

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
    <th scope="col" className="px-6 py-3" data-testid={testId}>
      {renderContent()}
    </th>
  );
}
