import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  let [sum, setSum] = useState(0);
  let [x, setX] = useState(1);

  function addX () {
    setSum(sum+x);
  }

  function payment () {
    if (sum >= 10) {
      setSum(sum-10);
      setX(x+1)
    } else {
      alert("You can't afford that!");
    }
  }

  function reach100 () {
    setSum(sum=0);
    setX(x=1)
  }

if(sum >= 100) {
  return (
    <main>
      <h2>You Win!</h2>
      <button onClick={reach100}>Play again?</button>
    </main>
  );
} else {
  return (
    <main>
      <h1>Current Score: {sum}</h1>
      <button onClick={addX}>+{x}</button>
      <button onClick={payment}>Pay 10 points to change from +{x} to +{x+1}</button>
    </main>
  );
}
}
export default App;
