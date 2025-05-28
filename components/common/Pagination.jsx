"use client";

import React, { useState } from "react";

export default function Pagination({
  itemLength = 200,
  itemPerPage = 10,
  setPage = (num) => {},
}) {
  const [activePage, setActivePage] = useState(1);
  const totalPages = Math.ceil(itemLength / itemPerPage); // Adjust as needed

  const handlePageClick = (page) => {
    if (page != 0 && page <= totalPages) {
      setActivePage(page);
      setPage(page);
    }
    // Add navigation logic here, e.g., using a router or window.location
  };

  return (
    <>
      {totalPages > 1 ? (
        <React.Fragment>
          {" "}
          <li onClick={() => handlePageClick(activePage - 1)}>
            <a>
              <i className="icon-arrow-left" />
            </a>
          </li>
          {[...Array(totalPages)].slice(0, 5).map((_, index) => {
            const page = index + 1;
            return (
              <li
                className={` ${activePage === page ? "active" : ""}`}
                key={page}
              >
                <a className="" onClick={() => handlePageClick(page)}>
                  {page}
                </a>
              </li>
            );
          })}
          {activePage == 6 && (
            <li className={` ${activePage === 6 ? "active" : ""}`}>
              <a className="" onClick={() => handlePageClick(6)}>
                {6}
              </a>
            </li>
          )}
          {activePage >= 7 && activePage <= 18 && (
            <li className="">
              <a className="">...</a>
            </li>
          )}
          {activePage >= 7 && activePage <= 18 && (
            <li className={` active`}>
              <a className="">{activePage}</a>
            </li>
          )}
          {totalPages > 8 ? (
            <li className="">
              <a className="">...</a>
            </li>
          ) : (
            ""
          )}
          {activePage == 19 && (
            <li className={` ${activePage === 19 ? "active" : ""}`}>
              <a className="" onClick={() => handlePageClick(19)}>
                {19}
              </a>
            </li>
          )}
          {totalPages > 8 ? (
            <li className={` ${activePage === totalPages ? "active" : ""}`}>
              <a className="" onClick={() => handlePageClick(totalPages)}>
                {totalPages}
              </a>
            </li>
          ) : (
            ""
          )}
          <li onClick={() => handlePageClick(activePage + 1)}>
            <a>
              <i className="icon-arrow-right" />
            </a>
          </li>{" "}
        </React.Fragment>
      ) : (
        ""
      )}
    </>
  );
}
