import { useEffect } from "react";
import axios from "axios";
import BarGraph from "./BarGraph/BarGraph";
import SearchResults from "./SearchResults/SearchResults";
import EvalGraph from "./EvalGraph/EvalGraph";
import "./Main.css";

const Main = ({ gameData, setGameData, searchResults, setSearchResults }) => {
  async function getGameData() {
    let response = await axios.get(`http://localhost:8080/all/`);
    setGameData(response.data);
  }
  useEffect(() => {
    getGameData();
  }, []);
  return (
    <div>
      <BarGraph gameData={gameData} />
      <div>
        {searchResults.length === 0 ? (
          <EvalGraph gameData={gameData} />
        ) : (
          <div className="search-table">
            <SearchResults
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
