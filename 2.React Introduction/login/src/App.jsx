import { useState, useEffect } from 'react';

import './App.css';
import Header from "./components/header/Header.jsx";
import Form from "./components/form/Form.jsx";
import Home from "./components/main/Main.jsx";


function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(()=>{
    const stored_log = localStorage.getItem("isLoggedIn");
    console.log(stored_log);
    if(stored_log === "true") setLogin();
  })

  

  function setLogin(){
    setLoginStatus(true);
    localStorage.setItem("isLoggedIn", "true");
  }
  function setLogout(){
    setLoginStatus(false);
    localStorage.setItem("isLoggedIn", "false");
  }

  return (
    <>
      <Header loginStatus={loginStatus} setLogout={setLogout}/>
      <main>
        {loginStatus?<Home />:<Form setLogin={setLogin}/>}
      </main>
    </>
  );
}

export default App
