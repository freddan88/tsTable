export interface BasicFilterProps {
  searchLabel?: string;
}

export default function TableFiltersBasic({ searchLabel }: BasicFilterProps) {
  return (
    <div className="px-6 py-3" data-testId="table-filter-basic">
      TableFiltersBasic
    </div>
  );
}
