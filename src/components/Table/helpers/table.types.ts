import { ReactNode } from "react";

export interface StringIndexType {
  [key: string]: string;
}

export interface CaptionType {
  label: string;
  placement?: "caption-top" | "caption-bottom";
}

export interface TableRowType {
  id: string;
  first_name: "Person_1" | "Person_2";
  last_name: "One" | "Two";
  age: number | null;
}

export interface ColumnProps {
  columnIndex: number;
  columns: ColumnType[];
  column: ColumnType;
}

export interface CellProps<T> {
  rowIndex: number;
  column: ColumnType;
  cellValue: string;
  row: T;
}

type Accessors<A> = keyof A;

export type ColumnTypes<T> = ColumnType<Accessors<T>>[];

export interface ColumnType<A = string, T = never> {
  Header: string | ReactNode | ((props: ColumnProps) => JSX.Element);
  accessor: A;
  sortable: boolean;
  id: string;
  Cell?: ReactNode | ((props: CellProps<T>) => JSX.Element);
  visibilityMenu?: {
    label: string;
  };
}
