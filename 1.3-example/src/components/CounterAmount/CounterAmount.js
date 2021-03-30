import React, { useState } from 'react';
import {connect} from 'react-redux';

import {counterIncrementByAmount} from '../../redux/actions/counterActions';

import styles from './CounterAmount.module.css';

const mapDispatchToProps = (dispatch) => ({
  incrementCountByAmount: (amount) => dispatch(counterIncrementByAmount(amount)),
});

export const CounterAmount = connect(
  null,
  mapDispatchToProps,
)(function CounterAmount({
  incrementCountByAmount,
}) {
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={e => setIncrementAmount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => incrementCountByAmount(Number(incrementAmount) || 0)}
      >
        Add Amount
      </button>
    </>
  );
});
