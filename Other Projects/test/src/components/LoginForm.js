import React from 'react'
import { useState } from 'react';
const LoginForm = ({changeData}) => {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const changeName = (e) => {
    setName(e.target.value);
  }
  const changePassword = (e) => {
    setPassword(e.target.value);
  }
  const submitData = (e) => {
    e.preventDefault();
    changeData(name, password)
  }
  return (
    <form onSubmit={submitData}>
      <label>Name:</label> <br />
      <input onChange={changeName} typeof='text'/> <br /><br />
      <label>Password:</label> <br />
      <input onChange={changePassword} typeof='password' /> <br />
      <button typeof='submit'>Submit Form</button>
    </form>
  )
}

export default LoginForm