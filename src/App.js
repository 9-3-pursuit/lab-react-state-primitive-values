import React from "react";
import "./App.css";
import { useState } from "react";
import { isElement } from "react-dom/test-utils";

function App () {
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(1)

  function changeScore() {

    setScore(score + counter);
  }
  
  function payTen() {
    if (score >= 10) {
      setScore(score - 10);
      addCounter();
   
    } else {
      alert("You can't afford that!")
      
    }
}  
   function toggleDisplay() {
    if (score >= 100) {
      return (
        <>
        <h1>Current Score: {score} </h1>
         <h2>You Win!</h2>
         <button >Play again?</button>

        </>)
    }else {
      return (
        <main>
          <h1>Current Score: {score} </h1>
          <button onClick={changeScore}>+{counter}</button>
          <button onClick={payTen}>Pay 10 points to change from +{counter} to +{counter + 1} </button>
        </main>
      );
    }


   }   
      
      
  function addCounter() {
    
    
    setCounter(counter + 1);
   
      
    }

  
    return (
      <main>
        <h1>Current Score: {score} </h1>

        <button onClick={changeScore}>+{counter}</button>
        <button onClick={payTen}>Pay 10 points to change from +{counter} to +{counter + 1} </button>
      </main>
    );
}

export default App;
