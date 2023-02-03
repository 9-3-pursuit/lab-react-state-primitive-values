import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [buttonCount, setButtonCount] = useState(1);

  //Handler functions

  const countClick = () => setCount(count + buttonCount);

  function buttonCountClick() {
    if (count < 10) {
      alert("You can't afford that!");
      return;
    }
    setButtonCount(buttonCount + 1);
    setCount(count - 10);
  }

  function resetGame() {
    setCount(0);
    setButtonCount(1);
  }

  //Alternative screens

  let gameInPlay = (
    <>
      <h1>Current Score: {count}</h1>
      <button onClick={countClick}>+{buttonCount}</button>
      <button onClick={buttonCountClick}>
        Pay 10 points to change from +{buttonCount} to +{buttonCount + 1}
      </button>
    </>
  );

  let youWon = (
    <div>
      <h2>You Win! </h2>
      <button onClick={resetGame}> Play again? </button>
    </div>
  );

  return <main>{count < 100 ? gameInPlay : youWon}</main>;
}

export default App;
