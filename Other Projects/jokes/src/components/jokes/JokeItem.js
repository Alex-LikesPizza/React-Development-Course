import styles from './JokeItem.module.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const JokeItem = (props) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.topic}</figcaption>
      </figure>
      <Link to={`/jokes/${props.id}`} className='btn'>Expand</Link>
    </li>
  );
};

export default JokeItem;
