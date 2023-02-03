import React, { useCallback, useState } from "react";
import "./App.css";

function App (){
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(1);
  
  function addScore(){
    setCounter(counter + points);
    if (counter >= 100){
      return null
  
    }
  }

  function payPoints(counter){
    if (counter >= 10){
     setCounter(counter-10)
     setPoints(points+1)
    }else{
      alert("You can't afford that!");
    }
  }

  function resetGame(){
    setCounter(0);
    setPoints(1);
  }

        if(counter < 100){
        return(
        <main>
          <div>
        <h1>Current Score: {counter}</h1>
        <button onClick={addScore}>+{points}</button>
        <button onClick={()=> payPoints(counter)}>Pay 10 points to change from +{points} to +{points + 1}</button>
        </div>
        </main>)
        }else{
          return(
          <main>
          <div>
          <h2>You Win!</h2>
          <button onClick={resetGame}>Play again?</button>
          </div>
          </main>
          )
        }  
    ;
}

export default App;
