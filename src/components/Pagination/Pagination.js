import React from "react";

const Pagination = ({ pageList, setCurrentPage }) => {
  return (
    <>
      {pageList.map((number) => (
        <button key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      ))}
    </>
  );
};

export default Pagination;
