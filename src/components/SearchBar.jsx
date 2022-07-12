import { useState } from "react";
import SuggestionBox from "./suggestion/SuggestionBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useProductContext from "../hooks/useProductContext";
const SearchBar = ({ inputRef, setShowResult, showResult }) => {
  const context = useProductContext();
  const [val, setVal] = useState(" ");
  const [suggestions, setSuggestions] = useState(false);
  const handleChange = async(e) => {
    setVal(e.target.value);
    await context.searchProducts(val);
  };
  const handleClick = async () => {
    inputRef.current.focus();
    setSuggestions(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await context.searchProducts(val);
    setShowResult(true);
    setSuggestions(false);
    setVal("");
  };
  return (
    <div className="search-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onClick={handleClick}
            value={val}
            onChange={handleChange}
            ref={inputRef}
            className="search-bar"
            type="text"
            placeholder="Search"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>

      {suggestions && !showResult && <SuggestionBox />}
    </div>
  );
};

export default SearchBar;
