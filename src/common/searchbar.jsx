import React from "react";

const SearchBar = ({ value, onSearch }) => {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={value}
        onChange={(e) => onSearch(e.currentTarget.value)}
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fa fa-search"></i>
      </span>
    </div>
  );
};

export default SearchBar;
