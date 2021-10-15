import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.show)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" })
  };

  const increment = (n) => {
    dispatch({ type: "increment", payload: n })
  }


  const decrement = () => {
    dispatch({ type: "decrement" })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!!show && <div className={classes.value}> {counter}</div>}
      <div>
        <button onClick={() => increment(1)}> increment </button>
        <button onClick={() => increment(5)}> increment by 5 </button>
        <button onClick={decrement}> decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
