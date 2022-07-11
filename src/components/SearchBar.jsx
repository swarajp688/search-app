import {  useState } from "react";
import SuggestionBox from "./suggestion/SuggestionBox";
const SearchBar = ({ inputRef,setShowResult }) => {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
    if(val.length) setShowResult(true);
  }
  return (
    <div className="search-wrapper">
      <input
        value={val}
        onChange={handleChange}
        ref={inputRef}
        className="search-bar"
        type="text"
        placeholder="Search"
      />
      {document.activeElement === inputRef.current && val.length <= 0 && (
        <SuggestionBox />
      )}
    </div>
  );
};

export default SearchBar;
