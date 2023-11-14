import { useState } from "react";

import PlayerInfo from "./PlayerInfo";
import GameBoard from "./Gameboard";

function Game() {
  const [activePlayer, setActivePlayer] = useState('X');

  function onSelectSquare(){
    setActivePlayer(currentPlayer => currentPlayer === 'X'? 'O' : 'X');
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo isActive={activePlayer === 'X'} playerName="Player 1" playerSymbol='X' />
        <PlayerInfo isActive={activePlayer === 'O'} playerName="Player 2" playerSymbol='O' />
      </ol>
      <GameBoard activePlayer={activePlayer} onSelectSquare={onSelectSquare}/>
    </div>
  )
}

export default Game