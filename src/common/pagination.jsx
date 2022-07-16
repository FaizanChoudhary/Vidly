import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  ////////////////////////////////////////
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <p className="page-link" onClick={() => props.onPageChange(page)}>
              {page}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
