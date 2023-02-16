import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0);
  const [x, setX] = useState(1);
  const [win, setWin] = useState(false);

  // + button
  function upScore () {
    setScore(score + x);
    if (score + x >= 100) {
      setWin(true);
    }
  }

  // pay 10 points
  function under10(){
    if (score < 10) {
      alert("You can't afford that!")
    } else {
      setX(x + 1);
      setScore(score - 10)
    }
  }

  //play again 
  function reset() {
    setScore(0);
    setX(1);
    setWin(false);
  };

  if (win) {
    return (
        <div>
            <main>
            <h1>You Win!</h1>
                <button onClick={() => reset()}>Play again?</button>
            </main>
        </div>
    ) 
}

    return (
      <main>
      <div>
        <span>Your final score is {score}</span>
      </div>
      <div>
        <h1>Current Score: {score}</h1>
        <button 
        onClick={() => upScore()}>+{x}</button>
        <br/>
        <button 
        onClick={() => under10()}>Pay 10 points to change from +{x} to +{x +1} </button>
      </div>
      </main>
    );
    }

export default App;
