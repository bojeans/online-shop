const FilterBy = ({ setCategory, categories }) => {
  const onChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="filterBy">
      <label htmlFor="category">Filter by</label>
      <select id="category" onChange={onChange}>
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBy;
