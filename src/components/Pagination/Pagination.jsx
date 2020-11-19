import React from 'react';

import classNames from 'classnames';

import '../Pagination/Pagination.scss'

export function Pagination({ countPages, handleCurrentPage, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= countPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
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
  );
}