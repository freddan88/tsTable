import { useMemo, useState } from "react";

const PAGES_SHOWN = 3; // MAX_PAGINATION_BUTTONS
const BUTTON_SIZE = 24;
const BUTTON_LEFT_MARGIN = 4;
const PAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function TablePagination() {
  const [translateValue, setTranslateValue] = useState(0);

  const buttonTotalSize = BUTTON_SIZE + BUTTON_LEFT_MARGIN;
  const paginatedPageWidth = useMemo(() => {
    return buttonTotalSize * PAGES_SHOWN;
  }, [buttonTotalSize]);

  const handlePageChange = (page: number) => {
    if (PAGES_SHOWN === PAGES.length) return;
    if (page === 1 || page === 2) {
      return setTranslateValue(0);
    }
    setTranslateValue(-(page - 2) * buttonTotalSize);
  };

  return (
    <div
      data-testid="table-pagination"
      className="flex justify-between items-center pt-4 px-6"
    >
      <div className="flex items-center">
        <span>Records per page</span>
        <select>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="flex items-center">
        <span>Show page</span>
        <div className="overflow-hidden" style={{ width: paginatedPageWidth }}>
          <div
            className="whitespace-nowrap"
            style={{
              translate: `${translateValue}px 0`,
            }}
          >
            {PAGES.map((page) => {
              return (
                <button
                  key={page}
                  type="button"
                  className="border rounded-lg text-center"
                  style={{
                    width: BUTTON_SIZE,
                    height: BUTTON_SIZE,
                    marginLeft: BUTTON_LEFT_MARGIN,
                  }}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
