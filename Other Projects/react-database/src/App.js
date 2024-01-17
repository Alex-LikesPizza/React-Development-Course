import React, { useState } from "react";

import JokeList from "./components/JokeList";
import AddJoke from "./components/AddJoke";
import "./App.css";

function App() {

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchJokesHandler() {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("https://reactplusfirebase-466c7-default-rtdb.europe-west1.firebasedatabase.app/jokes.json");
      if (!response.ok) {
        throw new Error('Something went wrong.');
      }
      const data = await response.json();
      
      const jokes = [];

      for(const key in data){
        const joke = {id: key, ...data[key]}
        jokes.push(joke);
      }
      
      setJokes(jokes);

    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }

  async function addJokeHandler(joke){
    const response = await fetch("https://reactplusfirebase-466c7-default-rtdb.europe-west1.firebasedatabase.app/jokes.json",
      {
        method: "POST",
        body: JSON.stringify(joke),
        headers: {
          'Content-Type': "application/json"
        }
      }
    );
    const data = await response.json();


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
