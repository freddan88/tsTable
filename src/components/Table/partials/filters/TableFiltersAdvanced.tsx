import { Dispatch, ReactNode, SetStateAction } from "react";
import { ColumnType } from "../../helpers/table.types";

interface TableFiltersAdvancedProps {
  setActiveColumns: Dispatch<SetStateAction<ColumnType[]>>;
  activeAccessors: string[];
  columns: ColumnType[];
  userFilter: ReactNode;
}

const checkActiveColumnState = (columns: ColumnType[], column: ColumnType) => {
  return columns.findIndex((obj) => obj.accessor === column.accessor) > -1;
};

export default function TableFiltersAdvanced({
  columns,
  userFilter,
  activeAccessors,
  setActiveColumns,
}: TableFiltersAdvancedProps) {
  const toggleActiveColumns = (toggledColumn: ColumnType) => {
    setActiveColumns((prevColumns) => {
      const isActive = checkActiveColumnState(prevColumns, toggledColumn);
      if (isActive) {
        return prevColumns.filter((obj) => {
          return obj.accessor !== toggledColumn.accessor;
        });
      }
      return [...prevColumns, toggledColumn];
    });
  };

  return (
    <div
      className="px-6 py-3 flex justify-between items-center"
      data-testid="table-filter-advanced"
    >
      <div>{userFilter}</div>
      <ul>
        {columns.map((column) => {
          const { id, accessor, visibilityMenu } = column;
          if (visibilityMenu) {
            return (
              <li className="flex gap-1 items-center" key={id}>
                <input
                  id={id}
                  onChange={() => toggleActiveColumns(column)}
                  checked={activeAccessors.includes(accessor)}
                  type="checkbox"
                />
                <label htmlFor={id} className="select-none cursor-pointer">
                  {visibilityMenu.label}
                </label>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}
