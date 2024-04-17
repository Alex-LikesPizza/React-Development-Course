import { useState } from "react";

const FormTest = () => {
  const [ isDisabled, setIsDisabled ] = useState(true);
  const toggleButtonState = () => {
    setIsDisabled((prevState) => !prevState)
  }

  return(
    <div>
      <h1>Feedback Form</h1>
      <input type="text" placeholder="Enter FeedBack..." /> <br />
      <input onChange={toggleButtonState} id="box" type="checkbox"></input>
      <label htmlFor="box">I accept</label> <br />
      <button disabled={isDisabled}>Add FeedBack</button>
    </div>
  );
}

export default FormTest;