import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Test from './Test';
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
    <Router>
      <main>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </nav>
    </Router>
  );
}

export default App;
