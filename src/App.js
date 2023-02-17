import React from "react";
import "./App.css";
import { useState } from "react"
function App() {



  const [count, setCount] = useState(0);

  const [incrementorButton, setIncrementorButton] = useState(1);
 
  // const [points, payForPoints] = useState(true)
  const [buttonHides, setButtonHides] = useState(true)
// function startingScore () {
 
//   let currentScore= `Current Score:${score}`;
//   return currentScore;

// } 



  function keepScores() {
    
    setCount(count + incrementorButton);

  }

  function payForPoints() {
    if (count < 10) {
      alert("You can't afford that!")
    } else if (count >= 10) {

      setIncrementorButton(incrementorButton + count);
      setCount(count - 10);
     
    }
    return setIncrementorButton;

  }

  function victoryPage() {
    let victoryText = "You win!"
    if (count >= 100) {
      return victoryText;

    }
  }

  function buttonDisplayTask() {
    if (useState === true) {
      setButtonHides = false
    }
  }

  // function alert () {
  //   if (count)
  // }



  return (
    <main>
       

      {count < 100 ? (
        <div>
         
          <h2 class="text">Current Score: <span class="score">{count}</span></h2>
          <br>
          </br>
          <button onClick={keepScores}> +1</button>
          <button type="submit" value="setIncrementorButton +2"onClick={payForPoints}>Pay 10 points to change from +{setIncrementorButton} to {incrementorButton +1}</button>
          
        </div>) :(
        <div>
          <span>You win!</span>
          <button onClick="replay!">Play Again?</button>
        </div>
        )
      }
    </main>
  );
}

export default App;
