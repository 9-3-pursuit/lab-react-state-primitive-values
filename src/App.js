import React from "react";
import "./App.css";
import {useState} from 'react';

function App () {
  const [counter, setCounter] = useState(0);
  //counter = current score 
  const [accumulator, setAccumulator] = useState(1);
 // useState says prep for user interaction
  const countClick = () => setCounter(counter + accumulator);
// eventlistener when user clicks
  function  setCount () {
      if (counter < 10){
        window.alert("You can't afford that!")
        return 
      }
      setAccumulator (accumulator + 1)
      setCounter (counter - 10)
    }

function resetGame() {
  setCounter(0)
  setAccumulator(1)
}

let gameInPlay = (
  // a variable holding a function
  <div>
      <h1> Current Score: {counter} </h1>
      <button onClick={countClick}>+{accumulator}</button>
      <button onClick={setCount}>Pay 10 points to change from +{accumulator} </button>
  </div>
);

let youWin = (
  // a variable holding a function
    <div> 
      <h2> You Win! </h2>
      <button onClick = {resetGame}> Play again? </button>
    </div>
);
return <main> {counter <100 ? gameInPlay : youWin} </main>
// either the user is in game play, or call the youWin variable
}







export default App;
