import { useState } from "react";
import { Chart } from "react-google-charts";
import "./SearchResults.css";

const SearchResults = ({ gameData, searchResults, setSearchResults }) => {
  const [selectedGame, setSelectedGame] = useState([]);
  const [open, setOpen] = useState(false);
  const [chartGame, setChartGame] = useState({});

  const handleClearSearch = (e) => setSearchResults([]);

  const handleShowChart = () => {
    setOpen(true);
  };

  let chartData = [];

  const tableData = searchResults.map((result) => {
    function handleSelectGame() {
      setChartGame(result);
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
          <td>
            <button className="chart-button" onClick={handleShowChart}>
              Show Sales
            </button>
          </td>
        </tr>
      );
    }

    return (
      <tr className="active-row" onClick={handleSelectGame} key={result.id}>
        <td>{result.name}</td>
        <td>{result.platform}</td>
        <td>{result.genre}</td>
        <td>{result.publisher}</td>
      </tr>
    );
  });

  let gameCollective = gameData.filter(
    (game) =>
      game.name === chartGame.name && game.name.length === chartGame.name.length
  );
  gameCollective.map((thisGame) => {
    chartData = [...chartData, [thisGame.platform, thisGame.globalsales]];
  });

  const salesData = [["Platform", "Global Sales\nin Millions"], ...chartData];

  const options = {
    chart: {
      title: `${chartGame.name}`,
      subtitle: "Sales Per Platform",
    },
  };

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
    <div>
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
            <td>
              <button className="clear-button" onClick={handleClearSearch}>
                Clear Search
              </button>
            </td>
          </tr>
        </thead>
        <tbody>{selectedGame}</tbody>
      </table>
      {open && (
        <div className="game-chart-styling">
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={salesData}
            options={options}
          />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
