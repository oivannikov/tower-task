import React from 'react';

import classNames from 'classnames';

import '../Pagination/Pagination.scss'

export function Pagination({ countPages, handleCurrentPage, currentPage, handlePrevPage, handleNextPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= countPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <span className="pagination__prev" onClick={() => handlePrevPage()}>Prev</span>
      <ul>
      {
        pageNumbers.map(number => (
          <>
            <li className={classNames('pagination__page', {active: number === currentPage})} onClick={() => handleCurrentPage(number)} key={number}>
              <a className="pagination__page-link">{number}</a>
            </li>
          </>
        ))
      }
      </ul>
      <span className="pagination__next" onClick={() => handleNextPage()}>Next</span>
    </div>
  );
}