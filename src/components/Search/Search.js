import React from "react";

const Search = ({ setSearch }) => {
  const onChange = (e) => {
    if (e.target.value.length >= 3 || e.target.value === "") {
      setSearch(e.target.value);
    }
  };

  return (
    <>
      <div className="root">
        <input
          type="search"
          aria-label="search"
          className="search"
          placeholder="search..."
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Search;
