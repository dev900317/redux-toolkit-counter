import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  decrement,
  increment,
  incrementByAmount,
} from './features/counter/counterSlice';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value); // same as state && state.counter

  console.log(counter);
  return (
    <div className="App">
      <h1>Redux Toolkit CounterApp</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(incrementByAmount(20))}>
        Increase Amount
      </button>
    </div>
  );
}

export default App;
