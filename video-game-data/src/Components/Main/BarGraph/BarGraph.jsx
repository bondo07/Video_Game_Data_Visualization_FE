import { Chart } from "react-google-charts";

const BarGraph = ({gameData}) => {
    
    let gameByYear = gameData.filter(game => game.year >= 2013)

    // let ps4 = gameByYear.filter(game => game.platform === "PS4")
    // let wiiU = gameByYear.filter(game => game.platform === "WiiU") 
    // let pc = gameByYear.filter(game => game.platform === "PC") 
    // let n3DS = gameByYear.filter(game => game.platform === "3DS") 
    // let xBox360 = gameByYear.filter(game => game.platform === "X360") 
    // let xboxOne = gameByYear.filter(game => game.platform === "XOne") 
    // let ps2 = gameByYear.filter(game => game.platform === "PS2") 
    // let dS = gameByYear.filter(game => game.platform === "DS") 
    // let ps3 = gameByYear.filter(game => game.platform === "PS3") 
    // let wii = gameByYear.filter(game => game.platform === "Wii") 
    
    // let ps4Sales = ps4.map((game) => {
    //     return(game.globalsales)
    // })
    // const initialValue = 0
    // let tempps4 = ps4Sales.reduce((accumulator, currentValue) => accumulator + currentValue,
    // initialValue)
    
    
    function salesReducer(platform) {
        let tempConsole = gameByYear.filter(game => game.platform === platform)
        let tempSales = tempConsole.map((game) => {
            return (game.globalsales)
        })
        let initialValue = 0
        let tempReduce = tempSales.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
        return(tempReduce)
    };
    console.log(salesReducer("DS"))

    const salesData = [
        ["Platform", "Sales"],
        ["PS4", salesReducer("PS4")],
        ["XOne", salesReducer("XOne")],
        ["WiiU", salesReducer("WiiU")],
        ["PC", salesReducer("PC")],
      ];
      
      const options = {
        chart: {
          title: "Global Game Sales Per Console",
          subtitle: "Sales",
        },
      };

    return (  
        <div>
            <Chart
            chartType="Bar"
            // width="100%" Find what css element is controlling this sizing
            height="400px"
            data={salesData}
            options={options}
        />
        </div>
      );
}
 
export default BarGraph;