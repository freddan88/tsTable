import { ReactNode } from "react";

interface ColumnProps {
  columnIndex: number;
  columns: ColumnType[];
  column: ColumnType;
}

type Accessors<A> = keyof A;

export type ColumnTypes<T> = ColumnType<Accessors<T>>[];

export interface CellProps<T> {
  rowIndex: number;
  column: ColumnType;
  cellValue: string;
  row: T;
}

export interface ColumnType<A = string, T = never> {
  Header: string | ReactNode | ((props: ColumnProps) => JSX.Element);
  accessor: A;
  sortable: boolean;
  id: string;
  size?: number | "narrow";
  Cell?: ReactNode | ((props: CellProps<T>) => JSX.Element);
  visibilityMenu?: {
    label: string;
  };
}
