import "./Form.css";
import { useState } from "react";

function Form({setLogin}) {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  

  function manageEmail(e){
    setEmail(e.target.value);

    if(e.target.value.includes('@')){
      setEmailIsValid(true);
    } else setEmailIsValid(false);
  }
  
  function managePassword(e){
    setEmail(e.target.value);
    if(e.target.value.length > 7){
      setPasswordIsValid(true);
    } else setPasswordIsValid(false);
  }
  
  function manageSubmit(e){
    e.preventDefault();
    
    if(!emailIsValid){
      document.getElementById("form__email").style.borderColor = "red";
    
    }else document.getElementById("form__email").style.borderColor = "rgb(84, 84, 84)";
    if(!passwordIsValid){
      document.getElementById("form__password").style.borderColor = "red";

    } else document.getElementById("form__password").style.borderColor = "rgb(84, 84, 84)";
    if(!emailIsValid || !passwordIsValid)return;

    
    setLogin();
  }

  return (
    <form onSubmit={manageSubmit} className="form__container">
        <h2 className="form__title">Login</h2>
        <label>Email:</label>
        <input onChange={manageEmail} id="form__email" type="text"/>
        <label>Password:</label>
        <input onChange={managePassword} id="form__password" type="password" />
        <input type="submit" value="Login"/>
    </form>
  );
}

export default Form