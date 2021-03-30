import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment as incrementAction,
  decrement as decrementAction,
  incrementByAmount as incrementByAmountAction,
  incrementAsync as incrementAsyncAction,
  selectCount,
} from './counterSlice';

export function Counter({children}) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  function increment() {
    dispatch(incrementAction());
  }

  function decrement() {
    dispatch(decrementAction())
  }

  function incrementByAmount(amount) {
    dispatch(incrementByAmountAction(Number(amount) || 0));
  }

  function incrementAsync(amount) {
    dispatch(incrementAsyncAction(Number(amount) || 0));
  }

  return children({
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    count,
  });
}
