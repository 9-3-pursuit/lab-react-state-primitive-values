import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [num, setNum] = useState(0)
  const [plusOne, setPlusOne] = useState("+1")
  const [payBtn, setPayBtn] = useState("Pay 10 points to change from +1 to +2")
  function addOne(){
    const selectIndex = num +1
    setNum(selectIndex)
   
  }
      function payTen(){
         if(num < 10){
          alert("You can't afford that!")
         }
         if(num >= 10){
          const subTen = (num - 10)
          setNum(subTen)
          const changeTen = "+2"
          setPlusOne(changeTen)
          const changePayBn = "Pay 10 points to change from +2 to +3"
          setPayBtn(changePayBn)
        }
         if(plusOne === "+2"){
          const addTwo= (num +2)
          setNum(addTwo)
         } 
        }
    return (
      <main>
        <p>Current Score:{num}</p>
        <button onClick={addOne}>{plusOne}</button>
        <br></br>
        <br></br>
        <button onClick={payTen}>{payBtn}</button>
      </main>
    );
}

export default App;
