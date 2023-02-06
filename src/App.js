import React from "react";
import "./App.css";
import { useState } from "react"

function App () {
  let victoryMessage = "";
  const [incrementor, setIncrementor] = useState(1);
  const [scoreCount, setScoreCount] = useState(0); 


  function increaseScore() {
    setScoreCount(scoreCount + incrementor);
  }

  
  function payForPointsButton() {
    if (scoreCount < 10) {
        alert("You can't afford that!")
        // <p>You can't afford that!</p>
    } else if (scoreCount >= 10){
      setIncrementor(incrementor + 1);
      setScoreCount(scoreCount - 10);
    }
  }

  function resetGame() {
    setScoreCount(0);
    setIncrementor(1);
  }


  if (scoreCount >= 100) {
    return (
      <>
        <h2>You Win!</h2>
        <button onClick={resetGame}>Play Again?</button>
      </>
      
      )
  }

  
    return (
      <main>
        <p>React State Lab</p>
        <h2>Current Score: {scoreCount}</h2>
        <button onClick={increaseScore}>+{incrementor}</button>
        <button onClick={payForPointsButton}>Pay 10 points to change from +{incrementor} to +{incrementor + 1}</button>
        <h2>{victoryMessage}</h2>
        <div>

        </div>
      </main>
    );
}

export default App;
