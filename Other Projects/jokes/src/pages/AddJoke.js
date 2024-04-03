import React, { useEffect } from 'react'
import JokeForm from "../components/jokes/JokeForm"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import useHttp from '../hooks/use-http';
import { addJoke } from '../hooks/firebase-api';
const AddJoke = () => {
  const history = useHistory();
  const {sendHttpRequest, status} = useHttp(addJoke);
  useEffect(() => {
    if(status === 'completed'){
      history.push('/jokes');
    }
  }, [status, history]);

  const addJokes = (jokeData) => {
    console.log(jokeData);
    sendHttpRequest(jokeData);
  }

  return (
    <JokeForm isLoading={status === "pending"} onAddJoke={addJokes}/>
  )
}

export default AddJoke