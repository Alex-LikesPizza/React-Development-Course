import "./Header.css";

function Header({loginStatus, setLogout}) {
  
  function changeLoginStatus(){
    setLogout();
  }
  const Nav = () => {
    if(loginStatus)return(
      <>
        <ul>
          <li>User</li>
          <li>Dashboard</li>
          <li><button onClick={changeLoginStatus}>Log out</button></li>
        </ul>
      </>
    );
    else return;
  }
  return (
    <header>
      <h1 className="Header__Title">Web Login</h1>
      <Nav />
    </header>
  );
}

export default Header