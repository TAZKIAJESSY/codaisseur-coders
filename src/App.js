import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home </Link>
        <Link to="/signup">Sign up</Link>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/post/:id" component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
