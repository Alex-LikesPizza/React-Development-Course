import React, { useState } from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchJokesHandler() {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_ten");
      if (!response.ok) {
        throw new Error('Something went wrong.');
      }
      const data = await response.json();
      setJokes(data);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && !error && <p>No jokes found.</p>}
        {isLoading && <p>Loading jokes...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
