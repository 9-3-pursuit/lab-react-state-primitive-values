import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [points, setPoints] = useState(0)
  const [spend, setSpend] = useState(10)

  function earnPoints() {
    setPoints(points + 1)
  }

  function spendPoints() {
    if (points < spend) {
      alert('You can\'t afford that!')
    } else {
      setPoints(points - 10)
    }

    

    // setSpend(spend + 10)
    // for (let i = 10; i <= spend; i += 10) {

    // }
  }

  function playAgain() {
    setPoints(0)
  }
  
  if (points < 100) {
  return (
    <main>
      <h1>Current Score: {points}</h1>
      <button onClick={earnPoints}>+1</button>
      <br />
      <button onClick={spendPoints}>Pay 10 points to change from +1 to +2</button>
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
