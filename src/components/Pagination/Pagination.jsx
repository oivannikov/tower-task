import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Pagination.scss'

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
          <Fragment key={number}>
            <li
              className={classNames('pagination__page', {active: number === currentPage})}
              onClick={() => handleCurrentPage(number)}
            >
              <span className="pagination__page-number">{number}</span>
            </li>
          </Fragment>
        ))
      }
      </ul>
      <span className="pagination__next" onClick={() => handleNextPage()}>Next</span>
    </div>
  );
}

Pagination.propTypes = {
  countPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleCurrentPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
}
