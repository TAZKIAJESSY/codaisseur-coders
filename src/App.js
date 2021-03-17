import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
