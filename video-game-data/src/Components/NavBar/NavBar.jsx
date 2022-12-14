import SearchBar from "./SearchBar/SearchBar.jsx";
import "./NavBar.css";

const NavBar = ({ gameData, setSearchResults }) => {
  return (
    <div className="nav-bar">
      <h1>S&A Game Pro Data</h1>
      <SearchBar gameData={gameData} setSearchResults={setSearchResults} />
    </div>
  );
};

export default NavBar;
