import { useState } from "react";

const FormTest = ({setFeedbacks}) => {
  const [ isDisabled, setIsDisabled ] = useState(true);
  const [ feedbackText, setFeedbackTest ] = useState("");
  const toggleButtonState = () => {
    setIsDisabled((prevState) => !prevState)
  }

  const feedbackChange = (e) => {
    setFeedbackTest(e.target.value);
  }

  const submitFeedback = () => {
    setFeedbacks(prev => [
      ...prev,
      {
        id: Date.now(),
        text:feedbackText
      },
    ]);
    setFeedbackTest("");
  }
  return(
    <div>
      <h1>Feedback Form</h1>
      <input type="text" placeholder="Enter FeedBack..." onChange={feedbackChange} /> <br />
      <input onChange={toggleButtonState} id="box" type="checkbox"></input>
      <label htmlFor="box">I accept</label> <br />
      <button disabled={isDisabled} onClick={submitFeedback}>Add FeedBack</button>
    </div>
  );
}

export default FormTest;