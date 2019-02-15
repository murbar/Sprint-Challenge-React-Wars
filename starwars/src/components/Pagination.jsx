import React from 'react';

const Pagination = ({ next, prev, onPageChange }) => {
  return (
    <div className="pagination">
      {prev && (
        <button title="Previous page" onClick={() => onPageChange(prev)}>
          Previous Page
        </button>
      )}
      {next && (
        <button title="Next page" onClick={() => onPageChange(next)}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default Pagination;
