import classes from "./Search.module.css";
import search from "../assets/search.svg";

function SearchBox() {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="22041021 or J40" />
      <button>
        <img className={classes["search-img"]} src={search} alt="search-icon" />
      </button>
    </div>
  );
}

export default SearchBox;
