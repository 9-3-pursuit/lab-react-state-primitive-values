import React from "react";
import "./App.css";
import {useState} from "react";
function App () {
  
  const [sum, setSum] = useState(0)
  const [x, setX] = useState(1)

  function addX (){
    if (sum >= 100){
      <h2>You Win!</h2>
    }
   setSum(sum +x)
  }
  
  function payment(){
    if(sum >= 10){
      setSum(sum - 10) 
      setX(x+1)
    } else {
      alert("You can't afford that!")
    }
  }

    return (
      <main>
        <h1>Current score: {sum} </h1>
        <button onClick = {addX}>+{x}</button>
        <button onClick = {payment}>Pay 10 points to change from +{x} to +{x+1}</button>
      </main>
    );
}

export default App;
