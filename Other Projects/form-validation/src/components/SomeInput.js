import React, { useRef, useState } from "react";

const SomeInput = (props) => {
  const [ enterName, setEnterName ] = useState('');
  const [ isValid, setIsValid ] = useState(false);
  const [ nameInput, setNameInput] = useState(false);
  const inputRef = useRef();

  const checkValid = () => {
    if(enterName.trim() === ''){
      setIsValid(false);
    }
    else{
      setIsValid(true);
    }
  }

  const nameChange = e =>{
    setEnterName(e.target.value);
  }

  const nameText = () => {
    setNameInput(true);
    if(enterName.trim() === ''){
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }
  const formSubmit = e => {
    e.preventDefault();
    setEnterName('');
    checkValid();
  }

  const isInvalid = !isValid && nameInput;
  const inputClass = isValid? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmit}>
      <div className={inputClass}>
        <label htmlFor="name">Enter Name</label>
        <input ref={inputRef} onChange={nameChange} onBlur={nameText} type="text" id="name" value={enterName}/>
        {!isValid && <p className="error-text">Field cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SomeInput;
