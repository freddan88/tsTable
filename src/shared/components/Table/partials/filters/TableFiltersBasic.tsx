export interface BasicFilterProps {
  searchPlaceholder?: string;
}

export default function TableFiltersBasic({
  searchPlaceholder = "Search...",
}: BasicFilterProps) {
  return (
    <div className="px-6 py-3" data-testid="table-filter-basic">
      <label htmlFor="table-filter-basic-search">TableFiltersBasic</label>
      <input
        id="table-filter-basic-search"
        placeholder={searchPlaceholder}
        name="search"
        type="search"
      />
    </div>
  );
}
