import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  let [score, setScore] = useState(0);
  let [increment, setIncrement] = useState(1);
  function changeScore() {
    setScore(score + increment);
  }
  function changeIncrement() {
    if (score - 10 >= 0) {
      setScore(score - 10);
      setIncrement(increment + 1);
    } else {
      alert("You can't afford that!");
    }
  }
  function resetGame() {
    setScore(0);
    setIncrement(1);
  }
  return (
    <main>
      {score < 100 && (
        <div id="game">
          <h1>Current Score: {score}</h1>
          <button onClick={() => changeScore()}>+{increment}</button>
          <button onClick={() => changeIncrement()}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </div>
      )}
      {score >= 100 && (
        <div id="victory">
          <h2>You Win!</h2>
          <button onClick={() => resetGame()}>Play again?</button>
        </div>
      )}
    </main>
  );
}

export default App;
