import { useState, useEffect } from "react";
import axios from "axios";
import BarGraph from "./BarGraph/BarGraph";
import SearchResults from "./SearchResults/SearchResults";
import EvalGraph from "./EvalGraph/EvalGraph";

const Main = ({ gameData, setGameData, searchResults, setSearchResults }) => {
  async function getGameData() {
    let response = await axios.get(`http://localhost:8080/all/`);
    setGameData(response.data);
  }
  useEffect(() => {
    getGameData();
  }, []);
  // console.log("Search Results", searchResults)
  return (
    <div>
      <BarGraph gameData={gameData} />
      <div>
        {searchResults.length === 0 ? (
          <EvalGraph gameData={gameData}/>
        ) : (
          <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} />
        )}
      </div>
    </div>
  );
};

export default Main;
