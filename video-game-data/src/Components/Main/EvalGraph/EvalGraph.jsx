import { Chart } from "react-google-charts";

const EvalGraph = ({gameData}) => {

    // let gamesSold = gameData.map(game => {
    //     let globalValue = game.globalsales
    //     let gameGlobalSales = gameData.map(data => {
    //         if(game.name === data.name && game.platform !== data.platform){
    //             globalValue += data.globalsales
    //             return [game.name, game.platform, globalValue]
    //         }
    //     })
        // console.log(gameGlobalSales)
        // return([gameGlobalSales
            // game.name, 
            // game.globalsales, 
            // game.platform
    //     ])
    // });
    // console.log(gamesSold)

    let soldGames = gameData.filter(game => {
        if(game.globalsales >= 25) {
            return {game}
        }
    })
    console.log(soldGames)
    let top10Games = soldGames.map((game) => {
        return ([game.name, game.platform, game.globalsales])
    });
    let distinctGames = [...new Set(top10Games)]
    console.log("DISTINCT", distinctGames)

    
    return (  
        <div>
            Hello World
        </div>
    );
}
 
export default EvalGraph;