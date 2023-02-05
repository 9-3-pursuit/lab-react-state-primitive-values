import React from "react";

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
      {currentScore < 100 ? (
        <div>
          <h1>Current Score: {currentScore}</h1>
          <button onClick={() => incrementByX(currentScore)}>+{x}</button>
          <button onClick={() => incrementChange(currentScore)}>Pay 10 points to change from +{x} to +{x + 1}</button>
        </div>
      ) : (
         <div>
           <h2>You Win!</h2>
           <button onClick={playAgain}>Play again?</button>
         </div>
      )}
    </main>
  );
}
export default App;