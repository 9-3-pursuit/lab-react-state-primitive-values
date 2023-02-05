import React from "react";
import "./App.css";
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0) // score button info
  const [added, setAdded] = useState(1) //increment button info
  function increaseAmt() {
    setCount(count + added)

  }

  function pointsPaid() {
    if (count < 10) {
      alert("You can't afford that!") // ! alert msg condition
    } else {
      if (count >= 10) { //increment of & decrement of 
        setCount(count - 10)
        setAdded(added + 1)
      }
      if (count >= 100) { //increment of 100 or more & you win
        setCount(count + added)


      }
    }
  }

  // !   function winPage(count) { 

  //  ! if (count >= 100) { //increment of 100 or more & you win
  //   !  setCount(count + added)


  // !  }
  //! ^--- code is another option for the >= 100 count but unsure of what way to insert it in the main}

  function restartGame() {
    setCount(0)
    setAdded(1)
  }
  return (

    <main>
      {count < 100 ? ( //allows for hide of currentscore text & increment button 
        <div>
          <h2>Current Score: {count}</h2>
          <button onClick={() => increaseAmt(count)}>+{added}</button>
          <button onClick={() => pointsPaid(count)}>Pay 10 points to change from +{added} to +{added + 1}</button>
        </div>

      ) : (
        <div>
          <h2>You Win!</h2>
          <button onClick={restartGame}>Play again?</button>
        </div>

      )}

      {/* <h3 style={font ? { color: "black" } : { color: "purple" }}> */}
      {/* <button style={count ? {display:'none'} : {display:'block'}}></button> */}

    </main>
  );
}

export default App;
