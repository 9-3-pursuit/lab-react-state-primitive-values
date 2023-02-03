import React from "react";
import "./App.css";

import "./index.css";
import { useState } from "react";

const [score, setScore] = useState(0);
const [point, setPoint] = useState(1);

const updateScore = () => {};
const updatePoints = () => {};
const reset = () => {};

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
