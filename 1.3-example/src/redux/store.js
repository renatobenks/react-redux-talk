import { createStore, combineReducers } from 'redux';

import {counterReducer} from './reducers/counterReducer';

export default createStore(
  combineReducers({
    counter: counterReducer,
  })
);
