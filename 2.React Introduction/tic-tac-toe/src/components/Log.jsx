
function Log({ turns }) {
  const listItems = turns.map(item => {
    const { square, player } = item;
    const { row, col } = square;

    return <li key={[row, col]}> {player} has been placed at {row}:{col} </li>
  })
  
  return (
    <ol id="log">
       {listItems}
    </ol>
  )
}

export default Log