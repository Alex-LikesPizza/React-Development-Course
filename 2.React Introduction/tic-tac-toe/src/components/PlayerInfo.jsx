import { useState } from 'react';

function PlayerInfo({playerName, playerSymbol}) {
  const [ name, setName ] = useState(playerName);
  const [ inputOpen, setInputOpen ] = useState(false);

  function handleClick() {
    setInputOpen(inputOpen => !inputOpen);
  }
  function handleChange(e){
    setName(e.target.value);
  }

  let playerNameField = <input onChange={handleChange} value={name} type='text' placeholder='Player 1' required />;
  if(!inputOpen)playerNameField = <span className="player-name">{name}</span>;

  return (
    <li>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleClick}>{inputOpen? "Save" : "Edit"}</button>
    </li>
  );
}

export default PlayerInfo