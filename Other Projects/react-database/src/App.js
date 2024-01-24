import React, { useState } from "react";

import JokeList from "./components/JokeList";
import AddJoke from "./components/AddJoke";
import "./App.css";
import useHttp from "./components/hooks/useHttp";

function App() {

  const [jokes, setJokes] = useState([]);
  
  function manageData(data){
    const loadedJokes = [];
    for(const key in data){
      loadedJokes.push({id: key, ...data[key]})
    };
    setJokes(loadedJokes);
  }
  
  const { isLoading, error, sendRequest:fetchJokesRequest } = useHttp();

  function fetchJokesHandler() {
    fetchJokesRequest({
      endpoint: "https://reactplusfirebase-466c7-default-rtdb.europe-west1.firebasedatabase.app/jokes.json",

    },
    manageData
    );
  }

  const { isLoadingOnAdd, errorOnAdd, sendRequest:addJokeRequest } = useHttp();

  function addJokeHandler(joke){
    addJokeRequest({
      endpoint: "https://reactplusfirebase-466c7-default-rtdb.europe-west1.firebasedatabase.app/jokes.json",
      method: "POST",
      body:joke
    }, (data) => {
      console.log(data);
    });
  }

  return (
    <>
      <AddJoke onAddJoke={addJokeHandler}/>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && !error && <p>No jokes found.</p>}
        {isLoading && <p>Loading jokes...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </>
  );
}

export default App;
