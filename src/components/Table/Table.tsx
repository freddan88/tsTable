import { ReactNode, useMemo, useState } from "react";
import TableHeadColumn from "./partials/TableHeadColumn";
import TableBodyColumn from "./partials/TableBodyColumn";
import { CaptionType, ColumnType, StringIndexType } from "./helpers/tableTypes";
import TableRow from "./partials/TableRow";
import TableFiltersAdvanced from "./partials/TableFiltersAdvanced";
import TableFiltersBasic from "./partials/TableFiltersBasic";

export interface TableProps {
  table: {
    columns: ColumnType[];
    caption?: CaptionType;
    data: unknown[];
  };
  filters?: {
    renderBasic: boolean;
    extended?: {
      component: ReactNode;
    };
  };
}

export default function Table({
  table: { columns, data, caption },
  filters,
}: TableProps) {
  const [activeColumns, setActiveColumns] = useState<ColumnType[]>(columns);

  const activeAccessors = useMemo<string[]>(() => {
    return activeColumns.map((obj) => obj.accessor);
  }, [activeColumns]);

  return (
    <section className="rounded-md bg-white m-2 py-8 shadow-md">
      {filters && filters.renderBasic && <TableFiltersBasic />}
      {filters && filters.extended && (
        <TableFiltersAdvanced
          userFilter={filters.extended.component}
          setActiveColumns={setActiveColumns}
          activeAccessors={activeAccessors}
          columns={columns}
        />
      )}
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {caption && (
          <caption className={caption.placement}>{caption.label}</caption>
        )}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <TableRow>
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
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, rowBodyIndex) => {
            const rowBodyKey = `${columns[rowBodyIndex].id}_row_${rowBodyIndex}`;
            return (
              <TableRow
                key={rowBodyKey}
                className="after:bg-gray-200 after:bottom-0 after:h-[1px] after:block after:absolute after:left-3 after:right-3 dark:bg-gray-800 dark:border-gray-700 bg-white relative"
              >
                {columns.map((column, columnBodyIndex) => {
                  if (!activeAccessors.includes(column.accessor)) return null;
                  const columnBodyKey = `${column.id}_cell_${columnBodyIndex}`;
                  const rowData = row as StringIndexType;
                  return (
                    <TableBodyColumn
                      rowIndex={rowBodyIndex}
                      key={columnBodyKey}
                      column={column}
                      row={rowData}
                    />
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}