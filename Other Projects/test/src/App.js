import './App.css';
import { useState } from "react"
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import ThemeButton from './components/ThemeButton';
import LoginForm from './components/LoginForm';

function App() {
  const [ userData, setUserData ] = useState(
    {
      name: "Your Name",
      password: "Your Password"
    }
  )
  const [ theme, setTheme ] = useState("light");
  
  const changeData = (name, password) => {
    setUserData({name, password})
  }
  return (
    <div className={`container theme-${theme}`}>
      <ThemeButton setTheme={setTheme} />
      <Header text="Welcome to ReactJS" />  
      <UserInfo name={userData.name} password={userData.password} />
      <LoginForm changeData={changeData}/>
    </div>
  );
}

export default App;
