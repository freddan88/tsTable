import { ColumnType, StringIndexType } from "../helpers/table.types";

interface TableBodyCellProps {
  columnIndex: number;
  column: ColumnType;
  rowIndex: number;
  row: StringIndexType;
}

export default function TableBodyColumn({
  columnIndex,
  rowIndex,
  column,
  row,
}: TableBodyCellProps) {
  const testId = `table-body-row-${rowIndex + 1}-column-${columnIndex + 1}`;
  const cellValue = row[column.accessor];

  const renderContent = () => {
    if (typeof column.Cell === "function") {
      return column.Cell({
        cellValue,
        rowIndex,
        column,
        row: row as never,
      });
    }
    return cellValue;
  };

  return (
    <td className="px-6 py-4" data-testid={testId}>
      {renderContent()}
    </td>
  );
}
