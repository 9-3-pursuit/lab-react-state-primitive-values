import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(1);

  const updateScore = () => {
    setScore(score + point);
  };

  const updatePoint = () => {
    if (score >= 10) {
      setPoint(point + 1);
      setScore(score - 10);
    } else {
      alert("You can't afford that!");
    }
  };

  const playAgain = () => {
    setScore(0);
    setPoint(1);
  };

  return (
    <main>
      {score < 100 ? (
        <div>
          <h1>Current Score: {score}</h1>
          <button onClick={updateScore}>+{point}</button>
          <button onClick={updatePoint}>
            Pay 10 points to change from +{point} to +{point + 1}
          </button>
        </div>
      ) : null}
      {score >= 100 ? (
        <div>
          <h1>You Win!</h1>
          <button onClick={playAgain}>Play again?</button>
        </div>
      ) : null}
    </main>
  );
}

export default App;
