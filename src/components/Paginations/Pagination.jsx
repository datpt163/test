import React from 'react';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        &lt;
      </button>

      <span>Trang {currentPage} / {totalPages}</span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
