import React from 'react';

import classNames from 'classnames';

import '../Pagination/Pagination.scss'

export function Pagination({ countPages, setCurrentPage, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= countPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
    {
      pageNumbers.map(number => (
        <>
          <li className="pagination__page" onClick={() => setCurrentPage(number)}>
            <a className={classNames('pagination__page-link', {pagination__active: number === currentPage})}>{number}</a>
          </li>
        </>
      ))
    }
    </ul>
  );
}