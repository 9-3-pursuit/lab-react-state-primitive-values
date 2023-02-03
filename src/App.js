import React from "react";
import "./App.css";
import {useState} from "react";


function App () {
  const [currentScore, setCurrentScore] = useState(0);
  const [x, setX] = useState(1);

function incrementByX() {
    //console.log("This will increase the score by 1");
    setCurrentScore(currentScore + x);
    
  }

  function incrementChange() {
    if (currentScore < 10) {
     alert("You can't afford that!"); 
    } else {
      setX(x + 1)
      setCurrentScore (currentScore - 10);
    }
  }

  function playAgain() {
    setX(1);
    setCurrentScore(0);
  }
  
    return (
      <main> 
        <div style={(currentScore < 100) ? {display: 'block'} : {display: 'none'}}>
        <h2>Current Score: {currentScore}</h2>
        <button onClick={incrementByX}>+{x}</button>
        <button onClick={incrementChange}>Pay 10 points to change from +{x} to +{x +1}</button>
        </div>
        <div style={(currentScore < 100) ? {display: 'none'} : {display: 'block'}}>
        <h2>Current Score: {currentScore}</h2>
        <h2> You Win! </h2>
        <button onClick={playAgain}> Play again?</button>
        </div>
      </main>
    );
}

export default App;
