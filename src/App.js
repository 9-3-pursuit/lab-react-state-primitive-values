import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [points, setPoints] = useState(0)
  const [spend, setSpend] = useState(10)

  function earnPoints() {
    setPoints(points + 1)
  }

  function spendPoints() {
    
  }
  
  return (
    <main>
      <h1>Current Score: {points}</h1>
      <button onClick={earnPoints}>+1</button>
      <br />
      <button>Pay 10 points to change from +1 to +2</button>
    </main>
  );
}

export default App;
