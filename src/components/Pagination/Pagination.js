import React from "react";

const Pagination = ({ pageList, setCurrentPage }) => {
  return (
    <>
      {pageList.map((number) => (
        <button
          className="page-buttons"
          key={number}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
    </>
  );
};

export default Pagination;
