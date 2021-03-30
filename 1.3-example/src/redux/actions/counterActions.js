export const COUNTER_INCREMENT = 'counter/INCREMENT';
export const COUNTER_DECREMENT = 'counter/DECREMENT';
export const COUNTER_INCREMENT_BY_AMOUNT = 'counter/INCREMENT_BY_AMOUNT';

export const counterIncrement = () => ({
  type: COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
  type: COUNTER_DECREMENT,
});

export const counterIncrementByAmount = (amount) => ({
  type: COUNTER_INCREMENT_BY_AMOUNT,
  payload: {
    amount,
  },
});
