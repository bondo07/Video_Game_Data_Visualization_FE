import SearchBar from "./SearchBar/SearchBar.jsx";

const NavBar = ({ gameData, setSearchResults }) => {
    return ( 
        <div>
            <h1>Video Game Data</h1>
            <SearchBar gameData={gameData} setSearchResults={setSearchResults} />
        </div> 
    );
}
 
export default NavBar;