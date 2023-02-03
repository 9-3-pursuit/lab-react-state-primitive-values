import React from "react";
import "./App.css";
import { useState } from 'react';


function App () {
  const [counter, setCounter] = useState(0);
  const [accumulator, setAccumulator] = useState(1)
  
  const countClick = () => setCounter(counter + accumulator);

  function setCount () {
    if (counter < 10){
      window.alert("You can't afford that!")
    return
  }
  // function addAccumulation() {
    setAccumulator(accumulator + 1)
    setCounter(counter - 10)
   
  }
  function resetGame() {
    setCounter(0)
    setAccumulator(1)
  }
  let gameInPlay = (
  <div>
    <h1>Current Score: {counter}</h1>
     <button onClick={countClick}>+{accumulator}</button>
     <button onClick={setCount}>Pay 10 points to change from +{accumulator} to +{accumulator + 1}</button>
  </div>
  );
    let youWon = (
      <div>
       <h2> You Win!</h2> 
       <button onClick = {resetGame}> Play again? </button>
      </div>
    );
    return <main> {counter < 100 ? gameInPlay : youWon}</main>
   }
 


export default App;
