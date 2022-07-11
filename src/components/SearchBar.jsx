import {  useState } from "react";
import SuggestionBox from "./suggestion/SuggestionBox";
const SearchBar = ({ inputRef,setShowResult,showResult }) => {
  const [val, setVal] = useState(" ");
  const [suggestions, setSuggestions] = useState(false);
  const handleChange = (e) => {
    setVal(e.target.value);
    if(e.target.value.length > 0) { 
      setShowResult(true);
      setSuggestions(false)
    } else {
      setShowResult(false);
      setSuggestions(true);
    }
  }
  const handleClick=()=>{
    inputRef.current.focus();
    setSuggestions(true)
  }
  return (
    <div className="search-wrapper">
      <input
        onClick={handleClick}
        value={val}
        onChange={handleChange}
        ref={inputRef}
        className="search-bar"
        type="text"
        placeholder="Search"
      />
      {document.activeElement === inputRef.current && suggestions  &&(
        <SuggestionBox />
      )}
    </div>
  );
};

export default SearchBar;
