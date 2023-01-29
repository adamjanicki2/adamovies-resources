import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https:www.adamovies.com"
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
