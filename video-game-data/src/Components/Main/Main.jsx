import { useState, useEffect } from "react";
import axios from "axios";
import BarGraph from './BarGraph/BarGraph';

const Main = ({}) => {

    const [gamedata, setGameData] = useState([])

    async function getGameData() {
        let response = await axios.get(`http://localhost:8080/all`)
        setGameData(response.data)
    }

    useEffect(() => {
        getGameData();
    }, [])



    return ( 
        <div>
            <BarGraph gamedata={gamedata}/>

        </div> 
    );
}
 
export default Main;