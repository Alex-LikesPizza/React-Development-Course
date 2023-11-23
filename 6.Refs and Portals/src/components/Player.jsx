import { useState, useRef } from "react";

function Player() {
  const playerName = useRef();

  const [ name, setName ] = useState();

  function handleClick(){
    setName(playerName.current.value);
    playerName.current.value = '';
    console.log(playerName);
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
export default Player;
