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

export interface ColumnType {
  Header: string | ReactNode | ((props: ColumnProps) => JSX.Element);
  accessor: "first_name" | "last_name" | "id";
  sortable: boolean;
  id: string;
  Cell?: ReactNode | ((props: CellProps<never>) => JSX.Element);
  visibilityMenu?: {
    label: string;
  };
}
