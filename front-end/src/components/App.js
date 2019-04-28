import React from "react";

import HidatoGrid from "./HidatoGrid";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hidato Solver</h1>
        <h2>Standard Square-shaped</h2>
      </header>
      <HidatoGrid />
    </div>
  );
}

export default App;
