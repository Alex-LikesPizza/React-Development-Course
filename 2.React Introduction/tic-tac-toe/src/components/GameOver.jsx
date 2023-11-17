import React from 'react'

function GameOver({winner, restartGame}) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p> {winner.toUpperCase()} won!</p>}
      {!winner && <p> It's a draw!</p>}
      <button onClick={restartGame}>Rematch!</button>
    </div>
  )
}

export default GameOver