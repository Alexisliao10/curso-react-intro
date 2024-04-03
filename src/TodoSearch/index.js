import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      type="text"
      value={searchValue}
      disabled={loading}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
