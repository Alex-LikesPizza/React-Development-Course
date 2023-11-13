import PlayerInfo from "./PlayerInfo";
import GameBoard from "./Gameboard";

function game() {
  return (
    <div id="game-container">
      <ol id="players">
        <PlayerInfo playerName="Player 1" playerSymbol='X' />
        <PlayerInfo playerName="Player 2" playerSymbol='O' />
      </ol>
      <GameBoard />
    </div>
  )
}

export default game