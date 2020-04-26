import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home Page</Link>
        <span> | </span>
        <Link to="/about">About Page</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/about">
          <h1>About Page</h1>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
