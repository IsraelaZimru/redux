import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.show)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const increment = (n) => {
    dispatch(counterActions.increment(n)) //אוטומטי כל פרמטר שנכנס לפונ' יהיה  }{type:SOME_UNIQUE_INDETIFIER , payload:parameter}
  }


  const decrement = () => {
    dispatch(counterActions.decrement())
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
