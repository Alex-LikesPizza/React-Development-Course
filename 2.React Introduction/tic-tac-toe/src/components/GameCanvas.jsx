import { useState } from "react";

import PlayerInfo from "./PlayerInfo";
import GameBoard from "./Gameboard";
import Log from "./Log";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from "./winning_combinations";

const PLAYERS = {
  X: "Player 1", 
  O: "Player 2"
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = gameTurns.length > 0 && gameTurns[0].player === 'X'? 'O' : 'X';
  return currentPlayer;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  
  for(const turn of gameTurns){
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard){
  let winner;
  
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = firstSquareSymbol;
      }
  }
  return winner;
}

function Game() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard);
  const hasDraw = gameTurns.length === 9 && !winner;

  function restartGame(){
    setGameTurns([]);
  };

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {...prevPlayers, [symbol] : newName};
    })
  }

  function onSelectSquare(rowIndex, colIndex){
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      for(const turn of prevTurns){
        if(turn.square.row === rowIndex && turn.square.col === colIndex)
          return prevTurns;
      }
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
          <PlayerInfo handlePlayerNameChange={handlePlayerNameChange} isActive={activePlayer === 'X'} playerName={PLAYERS.X} playerSymbol='X' />
          <PlayerInfo handlePlayerNameChange={handlePlayerNameChange} isActive={activePlayer === 'O'} playerName={PLAYERS.O} playerSymbol='O' />
        </ol>
        {(winner || hasDraw) && <GameOver restartGame={restartGame} winner={winner?players[winner]:winner} />}
        <GameBoard board={gameBoard} onSelectSquare={onSelectSquare}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default Game