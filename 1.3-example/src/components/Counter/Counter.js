import React from 'react';
import {connect} from 'react-redux';

import {counterIncrement, counterDecrement} from '../../redux/actions/counterActions';

import styles from './Counter.module.css';

const mapStateToProps = (state) => ({
  count: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(counterIncrement()),
  decrementCount: () => dispatch(counterDecrement()),
});

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(function Counter({
  count,
  incrementCount,
  decrementCount,
  children,
}) {
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
});
