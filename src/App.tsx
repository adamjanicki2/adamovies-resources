import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <a
          className="App-link"
          href="https://www.adamovies.com/login"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "48px" }}
        >
          Join Adamovies
        </a>
      </header>
    </div>
  );
}

export default App;
