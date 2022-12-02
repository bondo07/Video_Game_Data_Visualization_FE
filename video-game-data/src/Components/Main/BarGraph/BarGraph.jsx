import { Chart } from "react-google-charts";
import "./BarGraph.css"

const BarGraph = ({gameData}) => {
    
    let newerGames = gameData.filter(game => game.year >= 2013)

    let allPlatforms = newerGames.map(game => {
        return game.platform
    });

    let distinctPlatforms = [...new Set(allPlatforms)]


    let globalSalesGraphData = distinctPlatforms.map(platform => {
        return [platform, salesReducer(platform)]
    });


    function salesReducer(platform) {
        let tempConsole = newerGames.filter(game => game.platform === platform)
        let tempSales = tempConsole.map((game) => {
            return (game.globalsales)
        })
        let initialValue = 0
        let tempReduce = tempSales.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
        return(tempReduce)
    };

    const salesData = [
        ["Platform", "Global Sales\nin Millions"],
        ...globalSalesGraphData
      ];
      
      const options = {
        chart: {
          title: "Global Game Sales Per Console",
          subtitle: "2013 - 2020",
        },
      };

    return (  
        <div className="chart-styling">
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
 
export default BarGraph;