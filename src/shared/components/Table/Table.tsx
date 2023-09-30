import { ReactNode, useMemo, useState } from "react";
import TableHeadColumn from "./partials/TableHeadColumn";
import TableBodyColumn from "./partials/TableBodyColumn";
import { ColumnType } from "./helpers/table.types";
import TableFiltersAdvanced from "./partials/filters/TableFiltersAdvanced";
import TableFiltersBasic from "./partials/filters/TableFiltersBasic";

interface CaptionType {
  label: string;
  placement?: "caption-top" | "caption-bottom";
}

export interface TableProps {
  table: {
    data: unknown[];
    loading: boolean;
    columns: ColumnType[];
    caption?: CaptionType;
  };
  filters?: {
    basic: boolean;
    extended?: ReactNode;
    searchPlaceholder?: string;
  };
}

export interface StringIndexType {
  [key: string]: string;
}

export default function Table({
  table: { columns, data, caption, loading },
  filters,
}: TableProps) {
  const [activeColumns, setActiveColumns] = useState<ColumnType[]>(columns);

  const activeAccessors = useMemo<string[]>(() => {
    return activeColumns.map((obj) => obj.accessor);
  }, [activeColumns]);

  const renderTableBodyContent = (
    rowData: StringIndexType,
    rowBodyIndex: number
  ) => {
    if (loading) {
      const loadingRowKey = `table_body_loading_row_key_${rowBodyIndex}`;
      const testId = `table-body-loading-row-${rowBodyIndex + 1}`;
      return (
        <td
          key={loadingRowKey}
          data-testid={testId}
          colSpan={columns.length}
          className="px-6 py-4"
        >
          Loading...
        </td>
      );
    }
    return columns.map((column, columnBodyIndex) => {
      if (!activeAccessors.includes(column.accessor)) return null;
      const columnBodyKey = `${column.id}_cell_${columnBodyIndex}`;
      return (
        <TableBodyColumn
          columnIndex={columnBodyIndex}
          rowIndex={rowBodyIndex}
          key={columnBodyKey}
          column={column}
          row={rowData}
        />
      );
    });
  };

  return (
    <section className="rounded-md bg-white m-2 py-4 shadow-md">
      {filters && filters.basic && (
        <TableFiltersBasic searchPlaceholder={filters.searchPlaceholder} />
      )}
      {filters && filters.extended && (
        <TableFiltersAdvanced
          setActiveColumns={setActiveColumns}
          activeAccessors={activeAccessors}
          userFilter={filters.extended}
          columns={columns}
        />
      )}
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {caption && (
          <caption className={caption.placement}>{caption.label}</caption>
        )}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr data-testid="table-head-row">
            {columns.map((column, columnHeadIndex) => {
              if (!activeAccessors.includes(column.accessor)) return null;
              const columnHeadKey = `${column.id}_column_${columnHeadIndex}`;
              return (
                <TableHeadColumn
                  columnIndex={columnHeadIndex}
                  key={columnHeadKey}
                  columns={columns}
                  column={column}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowBodyIndex) => {
            const rowBodyKey = `table_body_row_key_${rowBodyIndex}`;
            const rowData = row as StringIndexType;
            return (
              <tr
                key={rowBodyKey}
                data-testid={`table-body-row-${rowBodyIndex + 1}`}
                className="after:bg-gray-200 after:bottom-0 after:h-[1px] after:block after:absolute after:left-3 after:right-3 dark:bg-gray-800 dark:border-gray-700 bg-white relative"
              >
                {renderTableBodyContent(rowData, rowBodyIndex)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
