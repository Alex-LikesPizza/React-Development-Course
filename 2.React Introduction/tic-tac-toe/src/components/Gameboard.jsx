
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function GameBoard({onSelectSquare, turns}) {
  
  let gameBoard = initialGameBoard;

  for(const turn of turns){
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex){
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(arr => [...arr])]
  //     if(!updatedBoard[rowIndex][colIndex]){
  //       updatedBoard[rowIndex][colIndex] = activePlayer;
  //       onSelectSquare(activePlayer);
  //     }
  //     return updatedBoard;
  //   });

    
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) =>
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerSymbolIndex) => 
              <li key={playerSymbolIndex}>
                <button onClick={() => onSelectSquare(rowIndex, playerSymbolIndex) }>{playerSymbol}</button>
              </li>
            )}
          </ol>
        </li>
      )}
    </ol>
  );
}

export default GameBoard