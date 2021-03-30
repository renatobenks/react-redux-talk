import {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_INCREMENT_BY_AMOUNT} from '../actions/counterActions';

const INITIAL_STATE = {
  value: 0,
};

export function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return {
        value: state.value + 1,
      };
    }

    case COUNTER_INCREMENT_BY_AMOUNT: {
      return {
        value: state.value + action.payload.amount,
      };
    }

    case COUNTER_DECREMENT: {
      return {
        value: state.value - 1,
      };
    }

    default: {
      return state;
    }
  }
}
