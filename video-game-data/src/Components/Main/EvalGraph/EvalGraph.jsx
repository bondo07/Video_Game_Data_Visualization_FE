import { Chart } from "react-google-charts";

const EvalGraph = ({gameData}) => {


    let soldGames = gameData.filter(game => {
        if(game.globalsales >= 25) {
            return {game}
        }
    })
    let top10Games = soldGames.map((game) => {
        return ([game.name, game.globalsales])
    });
    let distinctGames = [...new Set(top10Games)]


    const salesData = [
        ["VideoGame", "Global Sales\nin Millions"],
        ...distinctGames
    ];

    const options = {
        chart: {
            title: "Top 10 Games Sold",
            subtitle: "On a Single Console",
        },
    };
    
    return (  
        <div>
            <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={salesData}
            options={options}
        />
        </div>
    );
}
 
export default EvalGraph;