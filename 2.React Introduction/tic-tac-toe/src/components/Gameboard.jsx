import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function GameBoard({activePlayer, onSelectSquare}) {
  
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map(arr => [...arr])]
      if(!updatedBoard[rowIndex][colIndex]){
        updatedBoard[rowIndex][colIndex] = activePlayer;
        onSelectSquare();
      }
      return updatedBoard;
    });

    
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) =>
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerSymbolIndex) => 
              <li key={playerSymbolIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, playerSymbolIndex)}>{playerSymbol}</button>
              </li>
            )}
          </ol>
        </li>
      )}
    </ol>
  );
}

export default GameBoard