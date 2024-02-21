import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatchFunction = useDispatch();
  const incrementFunction = () => {
    dispatchFunction({type: "INCREMENT"})
  }
  const decrementFunction = () => {
    dispatchFunction({type: "DECREMENT"})
  }


  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={decrementFunction}>-</button>
      <button onClick={incrementFunction}>+</button>
    </main>
  );
};

export default Counter;
