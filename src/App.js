import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [points, setPoints] = useState(0)
  const [increment, setIncrement] = useState(1)

  function earnPoints() {
    setPoints(points + increment)
  }

  function spendPoints() {
    if (points < 10) {
      alert('You can\'t afford that!')
    } else {
      setPoints(points - 10)
      setIncrement(increment + 1)
    }
  }

  function playAgain() {
    setPoints(0)
  }
  
  if (points < 100) {
  return (
    <main>
      <h1>Current Score: {points}</h1>
      <button onClick={earnPoints}>+{increment}</button>
      <br />
      <button onClick={spendPoints}>Pay 10 points to change from +{increment} to +{increment + 1}</button>
    </main>
  );
  } else
  return (
    <main>
      <h1>Current Score: {points}</h1>
      <h2>You win!</h2>
      <button onClick={playAgain}>Play Again?</button>
    </main>
  )
}

export default App;
