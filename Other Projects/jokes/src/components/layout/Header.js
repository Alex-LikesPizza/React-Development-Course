import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/jokes" activeClassName={styles.active}>Jokes</NavLink>
          </li>
          <li>
            <NavLink to="/add-joke" > Add a Joke</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
