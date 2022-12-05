import { Chart } from "react-google-charts";
import "./EvalGraph.css";

const EvalGraph = ({ gameData }) => {
  // Line 6 through line 20 sorts the games and adds up the global sales for all platforms. Then returns the Object used to populate the Chart.
  let gamesSold = gameData.map((game) => {
    let filteredGames = gameData.filter(
      (data) => data.name === game.name && data.name.length === game.name.length
    );

    let globalSalesArray = filteredGames.map((thisGame) => {
      return thisGame.globalsales;
    });

    const globalValue = globalSalesArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    return { name: `${game.name}`, value: globalValue };
  });

  // Lines 23 through 31 remove duplicate games from the list returned to line 6, then sorts them by value(highest to lowest), and finally selects the top 10 sold games.
  let distinctGamesSold = Array.from(
    new Set(gamesSold.map(JSON.stringify))
  ).map(JSON.parse);

  let sortedDistinctGamesSold = distinctGamesSold.sort(
    (a, b) => b.value - a.value
  );

  let slicedDistinctGames = sortedDistinctGamesSold.slice(0, 10);

  // Lines 34 through line 48 populate the "Sales Across All Consoles" chart with the information gathered since line 6.
  let top10GamesAP = slicedDistinctGames.map((game) => {
    return [game.name, game.value];
  });

  const salesDataAP = [
    ["Video Game", "Global Sales\nin Millions"],
    ...top10GamesAP,
  ];

  const optionsAP = {
    chart: {
      title: "Top 10 Games Sold Globally",
      subtitle: "Across All Consoles",
    },
  };

  // Lines 51 through 72 populate the "Sales on a Single Console" chart.
  let soldGames = gameData.filter((game) => {
    if (game.globalsales >= 25) {
      return { game };
    }
  });

  let top10Games = soldGames.map((game) => {
    return [game.name, game.globalsales];
  });
  let distinctGames = [...new Set(top10Games)];

  const salesData = [
    ["Video Game", "Global Sales\nin Millions"],
    ...distinctGames,
  ];

  const options = {
    chart: {
      title: "Top 10 Games Sold",
      subtitle: "On a Single Console",
    },
  };

  return (
    <div>
      <div className="eval-chart-styling">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={salesData}
          options={options}
        />
      </div>
      <div className="eval-chart-styling">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={salesDataAP}
          options={optionsAP}
        />
      </div>
    </div>
  );
};

export default EvalGraph;
