import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import styles from './features/counter/Counter.module.css';

import './App.css';

function App() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter>
          {({count, increment, decrement, incrementByAmount, incrementAsync}) => (
            <div>
              <div className={styles.row}>
                <button
                  className={styles.button}
                  aria-label="Increment value"
                  onClick={() => increment()}
                >
                  +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                  className={styles.button}
                  aria-label="Decrement value"
                  onClick={() => decrement()}
                >
                  -
                </button>
              </div>
              <div className={styles.row}>
                <input
                  className={styles.textbox}
                  aria-label="Set increment amount"
                  value={incrementAmount}
                  onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                  className={styles.button}
                  onClick={() => incrementByAmount(incrementAmount)}
                >
                  Add Amount
                </button>
                <button
                  className={styles.asyncButton}
                  onClick={() => incrementAsync(incrementAmount)}
                >
                  Add Async
                </button>
              </div>
            </div>
          )}
        </Counter>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
