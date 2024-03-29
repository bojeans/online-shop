import React from "react";

const SortBy = ({ setSortBy }) => {
  const onChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="sortBy">
      <label htmlFor="sort">Sort by</label>
      <select id="sort" className="sort-dropdown-menu" onChange={onChange}>
        <option value="latest">Latest</option>
        <option value="low">Price: Low</option>
        <option value="high">Price: High</option>
      </select>
    </div>
  );
};

export default SortBy;
