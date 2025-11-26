import React from "react";
export default function Pagination({ page, total, setPage }) {
  return (
    <div className="flex justify-center mt-5 space-x-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span>{page} / {total}</span>

      <button
        disabled={page === total}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
