import { ColumnType, StringIndexType } from "../helpers/tableTypes";

interface TableBodyCellProps {
  column: ColumnType;
  rowIndex: number;
  row: StringIndexType;
}

export default function TableBodyColumn({
  column,
  rowIndex,
  row,
}: TableBodyCellProps) {
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

  return <td className="px-6 py-4">{renderContent()}</td>;
}
