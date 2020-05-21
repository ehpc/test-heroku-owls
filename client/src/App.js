import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/test');
      const data = await response.text();
      window.alert(data);
    })();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
