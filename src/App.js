import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [num, setNum] = useState(0)
  function addOne(){
    const selectIndex = num +1
    setNum(selectIndex)
   
  }
      function payTen(){
         if(num < 10){
          alert("You can't afford that!")
         }
         else if(num >= 10){
          const subTen = (num - 10)
          setNum(subTen)
         }
        }
    return (
      <main>
        <p>Current Score:{num}</p>
        <button onClick={addOne}>+1</button>
        <br></br>
        <br></br>
        <button onClick={payTen}>Pay 10 points to change from +1 to +2</button>
      </main>
    );
}

export default App;
