import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [x, setX] = useState(1);
  const [win, setWin] = useState(false);

  const handleIncrement = () => {
    setScore(score + x);
    if (score + x >= 100) {
      setWin(true);
    }
  };

  const handleIncrementorChange = () => {
    if (score < 10) {
      alert("You can't afford that!");
    } else {
      setX(x + 1);
      setScore(score - 10);
    }
  };

  const handleReset = () => {
    setScore(0);
    setX(1);
    setWin(false);
  };

  if (win) {
    return (
      <div>
        <main>
          <h1>You Win!</h1>
          <button onClick={handleReset}>Play again?</button>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main>
        <div>
          <span>Your final score is {score}</span>
        </div>
        <div>
          <h1>Current Score: {score}</h1>
          <button onClick={handleIncrement}>+{x}</button>
          <br />
          <button onClick={handleIncrementorChange}>
            Pay 10 points to change from +{x} to +{x + 1}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
