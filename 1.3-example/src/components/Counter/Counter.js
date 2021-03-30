import React from 'react';
import {useDispatch, useSelector, useStore} from 'react-redux';

import {counterIncrement, counterDecrement} from '../../redux/actions/counterActions';

import styles from './Counter.module.css';

export function Counter({
  children,
}) {
  const store = useStore();
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  console.log(store.getState());

  function incrementCount() {
    dispatch(counterIncrement());
  }

  function decrementCount() {
    dispatch(counterDecrement());
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => incrementCount()}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrementCount()}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        {children}
      </div>
    </div>
  );
}
