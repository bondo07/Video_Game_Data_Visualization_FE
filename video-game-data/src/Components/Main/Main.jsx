import { useState, useEffect } from "react";
import axios from "axios";
import BarGraph from './BarGraph/BarGraph';

const Main = ({ gameData, setGameData, searchResults }) => {


    async function getGameData() {
        let response = await axios.get(`http://localhost:8080/all/`)
        setGameData(response.data)
    }

    useEffect(() => {
        getGameData();
    }, [])



    return ( 
        <div>
            <BarGraph gameData={gameData}/>

        </div> 
    );
}
 
export default Main;