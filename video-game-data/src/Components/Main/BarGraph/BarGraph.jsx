import { Chart } from "react-google-charts";
import "./BarGraph.css";

const BarGraph = ({ gameData }) => {
  // Lines 9 through 19 filter the database to find only games released in 2013 or later,
  // then separates the available platforms,
  // also, gets rid of the duplicate platforms available,
  // and alas maps over the array of platforms to return information for the chart.
  let newerGames = gameData.filter((game) => game.year >= 2013);

  let allPlatforms = newerGames.map((game) => {
    return game.platform;
  });

  let distinctPlatforms = [...new Set(allPlatforms)];

  let globalSalesGraphData = distinctPlatforms.map((platform) => {
    return [platform, salesReducer(platform)];
  });

  // The function on line 23 through 34 takes in the platform as an argument and uses it to find all games related to that platform,
  // and find the sum of all of the corresponding games sales globally.
  function salesReducer(platform) {
    let tempConsole = newerGames.filter((game) => game.platform === platform);
    let tempSales = tempConsole.map((game) => {
      return game.globalsales;
    });
    let initialValue = 0;
    let tempReduce = tempSales.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    return tempReduce;
  }

  // Lines 37 through 47 populate the "Sales Per Console" chart.
  const salesData = [
    ["Platform", "Global Sales\nin Millions"],
    ...globalSalesGraphData,
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
};

export default BarGraph;
