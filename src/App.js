import React from "react";
import "./App.css";
import { useState } from "react";




function App() {
  const [counter, setCounter] = useState(0)
  const [points, setPoints] = useState(1);

  function addToScore(counter) {
    setCounter(counter + points)
    if (counter >= 100) {

    }
  }

  function payPoints(counter) {
    if (counter >= 10) {
      setCounter(counter - 10)
      setPoints(points + 1)
    } else {
      alert("You can't afford that!")
    }
  }

  function resetGame() {
    setCounter(0)
    setPoints(1)
  }

  return (
    <main>
      {counter < 100 ? (
        <div>
          <h1>Current Score: {counter}</h1>
          <button onClick={() => addToScore(counter)}>+{points}</button>
          <button onClick={() => payPoints(counter)}>Pay 10 points to change from +{points} to +{points + 1}</button>
        </div>
      ) : (
         <div>
           <h2>You Win!</h2>
           <button onClick={resetGame}>Play again?</button>
         </div>
      )}
    </main>
  );
}

export default App;

