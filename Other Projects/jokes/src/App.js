import { Route } from "react-router-dom";
import Jokes from "./pages/AllJokes";
import AddJoke from "./pages/AddJoke";
import JokeDetails from "./pages/JokeDetails";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "./components/layout/Layout"
function App() {
  return <Layout>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/jokes" />
      </Route>
      <Route path="/jokes" exact>
        <Jokes />
      </Route>
      <Route path="/jokes/:jokeID">
        <JokeDetails />
      </Route>
      <Route path="/add-joke">
          <AddJoke />
      </Route>
    </Switch>
  </Layout>;
}

export default App;
