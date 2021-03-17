import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
