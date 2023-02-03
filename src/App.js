import React from "react";
import "./App.css";
import { useState } from "react"

function App() {
  // let newScore = 0
  const [count, setCount] = useState(0) // score button info
  const [added, setAdded] = useState(1) //increment button info
  function increaseAmt() {
    setCount(count + added)

  }

  function pointsPaid() {
    if (count < 10) {
      alert("You can't afford that!") //alert msg condition
    } else {
      if (count >= 10) { //increment of & decrement of 
        setCount(count - 10)
        setAdded(added + 1)
      }
      // if (count >= 100) { //increment of 100 or more & you win
      //   setCount(count + added)


      // }
    }
  }

  function winPage(count) {

    if (count >= 100) { //increment of 100 or more & you win
      setCount(count + added)


    }
  }

  function restartGame() {
    setCount(0)
    setAdded(1)
  }
  return (

    <main>
      
      <h2>Current Score: {count}</h2>
      <button onClick={increaseAmt}>+{added}</button>
      <button onClick={pointsPaid}>Pay 10 points to change from +{added} to +{added + 1}</button>
      {/* <h3 style={font ? { color: "black" } : { color: "purple" }}> */}
      <button style={count ? {display:'none'} : {display:'block'}}></button>
      <h2>You Win!</h2>
      <button onClick={restartGame}>Play again?</button>
    </main>
  );
}

export default App;
