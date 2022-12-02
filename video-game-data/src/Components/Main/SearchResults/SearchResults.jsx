import { useState } from "react";
import './SearchResults.css'

const SearchResults = ({ searchResults, setSearchResults }) => {
    const [selectedGame, setSelectedGame] = useState([]);
    
    const handleClearSearch = e => setSearchResults([]);
    
    const tableData = searchResults.map((result) => {
        function handleSelectGame() {
            setSelectedGame(      
            <tr className="active-row" key={result.id}>
            <td>{result.game_rank}</td>
            <td>{result.name}</td>
            <td>{result.platform}</td>
            <td>{result.year}</td>
            <td>{result.genre}</td>
            <td>{result.publisher}</td>
            <td>{result.northamericasales}</td>
            <td>{result.europesales}</td>
            <td>{result.japansales}</td>
            <td>{result.othersales}</td>
            <td>{result.globalsales}</td>
            </tr>
            )
        };

        return (
            <tr className="active-row" onClick={handleSelectGame} key={result.id}>
                <td>{result.name}</td>
                <td>{result.platform}</td>
                <td>{result.genre}</td>
                <td>{result.publisher}</td>
            </tr>
    );
});

  
  return selectedGame.length === 0 ? (
    <table className="styled-table">
      <thead>
        <tr className="active-row">
          <th>Name</th>
          <th>Platform</th>
          <th>Genre</th>
          <th>Publisher</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  ) : (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Game Rank</th>
          <th>Name</th>
          <th>Platform</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Publisher</th>
          <th>North American Sales</th>
          <th>European Sales</th>
          <th>Japanese Sales</th>
          <th>Other Sales</th>
          <th>Global Sales</th>
          <td><button className="clear-button" onClick={handleClearSearch}>Clear Search</button></td>
        </tr>
      </thead>
      <tbody>{selectedGame}</tbody>
    </table>
  );
};

export default SearchResults;
