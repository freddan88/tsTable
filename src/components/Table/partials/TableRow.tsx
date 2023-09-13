import { ReactNode } from "react";

type TableRowProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
> & {
  children?: ReactNode;
};

export default function TableRow(props: TableRowProps) {
  const { children, ...rest } = props;
  return <tr {...rest}>{children}</tr>;
}
