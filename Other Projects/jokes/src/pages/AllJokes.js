import React, { useEffect } from 'react';
import JokeList from "../components/jokes/JokeList";
import NoJokesFound from "../components/jokes/NoJokesFound";
import { getJokes } from '../hooks/firebase-api';
import Loader from '../components/UI/Loader';
import useHttp from '../hooks/use-http';

// const JOKES = [
//   {
//     id: 'j1',
//     topic: 'web',
//     text: "details"
//   },
//   {
//     id: 'j2',
//     topic: 'Robotics',
//     text: "details"
//   }
// ];
const Jokes = () => {
  const {
    sendHttpRequest,
    status,
    data: loadedJokes,
    error
  } = useHttp(getJokes, true);

  useEffect(() => {
    sendHttpRequest();
  }, [sendHttpRequest]);
  if(status === 'pending'){
    return(
      <div>
        <Loader />
      </div>
    )
  }
  if(error){
    return <p>{error}</p>
  }
  if(status === 'completed' && (!loadedJokes || loadedJokes.length === 0)){
    return <NoJokesFound />
  }
  return (
    <JokeList jokes={loadedJokes} />
  )
}

export default Jokes