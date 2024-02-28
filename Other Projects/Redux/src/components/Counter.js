import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./store/counter-slice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.amount);
  const visibility = useSelector((state) => state.counter.visibility)
  const dispatchFunction = useDispatch();
  const incrementFunction = () => {
    dispatchFunction(counterSlice.actions.increment());
  }
  const decrementFunction = () => {
    dispatchFunction(counterSlice.actions.decrement());
  }
  const toggleFunction = () => {
    dispatchFunction(counterSlice.actions.toggle());
  }


  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      {visibility && <>
        <div className={classes.value}>{counter}</div>
        
        <div>
          <button onClick={decrementFunction}>-</button>
          <button onClick={incrementFunction}>+</button>
        </div>
      </>
      }
      <br/>
      <button onClick={toggleFunction}>Visibility</button>
    </main>
  );
};

export default Counter;
