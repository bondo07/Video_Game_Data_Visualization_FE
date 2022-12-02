import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ gameData, setSearchResults }) => {
  const [searchCriteria, setSearchCriteria] = useState("");

  const handleChange = (e) => setSearchCriteria(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = gameData.filter((games) => {
      return Object.values(games)
        .join("")
        .toLowerCase()
        .includes(searchCriteria.toLowerCase());
    });
    if (searchCriteria === "") {
      setSearchResults([]);
    } else {
      setSearchResults(filteredData);
      setSearchCriteria("");
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-text"
        placeholder="Search Game"
        type="text"
        value={searchCriteria}
        onChange={handleChange}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
