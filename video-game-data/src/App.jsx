import "./App.css";
import Main from "./Components/Main/Main.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import { useState } from "react";

function App() {
  const [gameData, setGameData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="bg-color">
      <NavBar gameData={gameData} setSearchResults={setSearchResults} />
      <Main
        gameData={gameData}
        setGameData={setGameData}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </div>
  );
}

export default App;
