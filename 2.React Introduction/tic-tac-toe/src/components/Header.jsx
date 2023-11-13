import imageSource from "../assets/game-logo.png";

function Header() {
  return (
    <header>
      <img src={imageSource} alt="Tic-Tac-Toe game board image" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  )
}

export default Header