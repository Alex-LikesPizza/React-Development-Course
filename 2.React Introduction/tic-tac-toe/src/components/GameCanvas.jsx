import { useState } from "react";

import PlayerInfo from "./PlayerInfo";
import GameBoard from "./Gameboard";
import Log from "./Log"

function Game() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function onSelectSquare(rowIndex, colIndex){
    setActivePlayer(currentPlayer => currentPlayer === 'X'? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X') currentPlayer = 'O';

      const updatedTurns = [
        {square: { row: rowIndex, col: colIndex }, player: currentPlayer},
         ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo isActive={activePlayer === 'X'} playerName="Player 1" playerSymbol='X' />
          <PlayerInfo isActive={activePlayer === 'O'} playerName="Player 2" playerSymbol='O' />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={onSelectSquare}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default Game