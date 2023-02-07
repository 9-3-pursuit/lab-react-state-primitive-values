import React from "react";
import "./App.css";
import {useState} from "react"
function App () {

 

  const [count, setCount] = useState(0);
  const [incrementorButton, setIncrementorButton] = useState(1);
  // const [points, payForPoints] = useState(true)
  const [buttonHides, setButtonHides] = useState(true)
  function keepScores () {
  
    setCount(count + incrementorButton);
  
  }

  function payForPoints () {
    if (count < 10) {
      alert("You can't afford that!")
    }else if (count >=10) {
      
       setIncrementorButton(incrementorButton + 1);
       setCount(count - 10);
     
    }

  }

  function victoryPage () {
    let victoryText = "You win!"
    if (count >= 100) {
      return victoryText;
      
    }
  }

  function buttonDisplayTask() {
    if(useState === true) {
      setButtonHides = false
    }
  }

  // function alert () {
  //   if (count)
  // }



    return (
      <main>
        {count < 100}
        <h2 class="text">Current Score:<span class="score">{ count }</span></h2>
        {/* <button onClick={setCountAndIncrementer}>Counter</button> */}
        <button onClick= { keepScores }>+{ incrementorButton }</button>
        <button onClick= { payForPoints }>Pay 10 points to change from +{ setIncrementorButton } to  {incrementorButton + 1 }<div> { setButtonHides }</div></button>
        <br></br>
        <br></br>
        <span>You win!</span>
        <br></br>
        <button onClick="replay!">Play Again?</button>
      </main>
    );
}

export default App;
