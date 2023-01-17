import React from 'react';

function Paginate({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (currentPage === 0 || pageNumbers.length < 2) {
    return null;
  }
  return (
    <div className="pagination flex justify-center">
      <ul className="flex">
        <li
          onClick={previousPage}
          className={currentPage === 1 ? 'disabled' : 'page-number'}
        >
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={`page-number ${number === currentPage ? 'active' : ''}`}
          >
            {number}
          </li>
        ))}
        <li
          onClick={nextPage}
          className={
            currentPage === pageNumbers.length ? 'disabled' : 'page-number'
          }
        >
          Next
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
