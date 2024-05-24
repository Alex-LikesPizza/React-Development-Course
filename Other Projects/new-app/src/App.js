import { Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Header from './components/header';
import About from './components/About';
import Article from './components/Article';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />


      <ul className='articles'>
        <li>
          <Link to="/article/a1">Article 1</Link>
        </li>
        <li>
          <Link to="/article/a2">Article 2</Link>
        </li>
        <li>
          <Link to="/article/a3">Article 3</Link>
        </li>
      </ul>
      <Route path="/article/:articleID">
        <Article />
      </Route>

      <h1>Hello!</h1>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
