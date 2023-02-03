import React from "react";
import "./App.css";

import "./index.css";
import { useState } from "react";

const [score, setScore] = useState(0);
const [point, setPoint] = useState(1);

const updateScore = () => {
  setScore((score) => score + 1);
};

const updatePoints = () => {
  if (score >= 10) {
    setPoint((point) => point + 1);
    setScore((score) => score - 10);
  } else {
    window.alert("You can't afford that!");
  }
};
const reset = () => {
  setScore(0);
  setPoint(1);
};

const App = () => {
  return (
    <main>
      <div className="main-game-container">
        <h1>Current Score: {score}</h1>
        <button onClick={updateScore}>+{point}</button>
        <button onClick={updatePoints}>
          Pay 10 points to change from +{point} to +{point + 1}
        </button>
      </div>

      <div className="game-won-container">
        <h2>You Win!</h2>
        <button type="submit" onClick={reset}>
          Play again?
        </button>
      </div>
    </main>
  );
};

export default App;
