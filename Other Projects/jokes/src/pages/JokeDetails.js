import React, { useEffect } from 'react'
import { Link, Route, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Comments from "../components/comments/Comments"
import HighlightedJoke from "../components/jokes/HighlightedJoke"
import { getJoke } from '../hooks/firebase-api'
import useHttp from '../hooks/use-http'
import Loader from '../components/UI/Loader'
import NoJokesFound from '../components/jokes/NoJokesFound'
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
// ]
const JokeDetails = () => {
  const params = useParams();
  const { jokeID } = params;
  const {
    sendHttpRequest,
    status,
    data: loadedJoke,
    error
  } = useHttp(getJoke, true);
  useEffect(() => {
    sendHttpRequest(jokeID);
  }, [sendHttpRequest, jokeID]);
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
  if(!loadedJoke.text){
    return <h1>Joke not found</h1>
  }
  return (
    <>
      <HighlightedJoke text={loadedJoke.text} topic={loadedJoke.topic} />

      <Route path={`/jokes/${params.jokeID}`} exact>
        <div className='centered'>
          <Link className='btn--empty' to={`/jokes/${params.jokeID}/comments`}>
            Comments
          </Link>
        </div>
      </Route>
      
      <Route path={`/jokes/${params.jokeID}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default JokeDetails