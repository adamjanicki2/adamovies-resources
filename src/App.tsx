import Logo from "./logo.svg?react";

function App() {
  return (
    <div className="container">
      <Logo className="logo" />
      <a
        href="https://www.adamovies.com/login"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "4rem",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#ffa500",
        }}
      >
        Join Adamovies
      </a>
    </div>
  );
}

export default App;
