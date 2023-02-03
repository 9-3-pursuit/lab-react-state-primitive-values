import React from "react";
import "./App.css";
import {useState} from "react"
function App () {
  const [count, setCounter] = useState(0)
  function setCountAndIncrementer () {
    let count = 0;

  }

    return (
      <main>
        <p>React State Lab</p>
        <h2>Current Score</h2>
        {/* <button onClick={setCountAndIncrementer}>Counter</button> */}
        <button>+1</button>
        <button>Pay 10 points to change from +1 to +2</button>
      </main>
    );
}

export default App;
