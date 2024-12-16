import classes from "./Search.module.css";
import search from "../assets/search.svg";
import { useState } from "react";

function SearchBox({ onSearchParam }) {
  const [searchParam, setSearchParam] = useState("");

  const searchParamChangeHandler = (event) => {
    setSearchParam(event.target.value);
  };

  const handleFormData = (event) => {
    event.preventDefault();
    onSearchParam(searchParam.toUpperCase());
    setSearchParam("");
  };

  return (
    <form className={classes.search}>
      <input
        type="text"
        value={searchParam}
        onChange={searchParamChangeHandler}
        placeholder="22041021 or J40"
      />
      <button onClick={handleFormData}>
        <img className={classes["search-img"]} src={search} alt="search-icon" />
      </button>
    </form>
  );
}

export default SearchBox;
