import React from "react";
import "./App.css";
import { useState } from 'react';

function App () {
   const [score, setScore] = useState(0);
   const [counter, setCounter] = useState(1)

  function changeScore() {
    setScore(score + counter);
  }

  function addCounter() {
     setCounter(counter + 1)
  }
  
  function payTen() {
    if (score >= 10) {
      setScore(score - 10);
      addCounter();
    } else {
      alert("You can't afford that!")
    }
  }

  

  function resetGame() {
    setScore(0)
    setCounter(1)
   }
   
   
    return (
      <main>
        
        {score < 100 ? (
        <div>
          <h1>Current Score: {score} </h1>
          <button onClick={changeScore}>+{counter}</button>
          <button onClick={payTen}>Pay 10 points to change from +{counter} to +{counter + 1}</button>
        </div>
    ) : (
        <div>
          {/* <h1>Current Score: {score} </h1> */}
          <h2>You Win! </h2>
          <button onClick={(resetGame)}>Play again?</button>
        </div>
    )}
      </main>
    );
}

export default App;
