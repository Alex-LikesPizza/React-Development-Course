import { useState } from 'react';
import { styled } from 'styled-components';
import { Input, Label } from "./micro-components/Field"
//#region Styled Components:
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

//#endregion
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      {/* <div className="controls"> */}
      <ControlContainer> {/* Third Party Libraries ("styled-components" library)*/}
        <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input $invalid={emailNotValid}
            type="email"
            // style={{
            //   color: emailNotValid? '#ef4444' : 'auto',
            //   backgroundColor: emailNotValid? '#fed2d2' : 'auto',
            //   'border-color': emailNotValid? '#f73f3f' : 'auto'
            // }} // Inline Styling

            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input $invalid={passwordNotValid}
            type="password"
            // style={{
            //   color: emailNotValid? '#ef4444' : 'auto',
            //   backgroundColor: emailNotValid? '#fed2d2' : 'auto',
            //   'border-color': emailNotValid? '#f73f3f' : 'auto'
            // }} // Inline Styling
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControlContainer>
      {/* </div> */}
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
