import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  //Link
} from "react-router-dom";
import {Home} from "./Home"
import {Read} from "./Read"
import {About} from "./About"

export default function App() {
  return (
    <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


/*
function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
*/