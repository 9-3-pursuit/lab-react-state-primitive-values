import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  let [sum, setSum] = useState(0);
  let [x, setX] = useState(1)
  let [none, setDisplayNone] = useState("none")
  let [block, setBlock] = useState("block")

  function addX () {
    setSum(sum+x);
    if(sum >= 100) {
      setDisplayNone(none = "block" );
      setBlock(block = "none" )
    }
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
    setDisplayNone(none = "none" );
    setBlock(block = "block" )
  }

    return (
      <main>
        <h1>Current Score: {sum}</h1>
        <h2 className={none}>You Win!</h2>
        <button className={none} onClick={reach100}>Play again?</button>
        <button className={block} onClick={addX}>+{x}</button>
        <button className={block} onClick={payment}>Pay 10 points to change from +{x} to +{x+1}</button>
      </main>
    );
}

export default App;
