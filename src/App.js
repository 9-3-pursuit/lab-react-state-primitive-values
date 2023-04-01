import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [num, setNum] = useState(0)
  const [plusOne, setPlusOne] = useState("+1")
  const [payBtn, setPayBtn] = useState("Pay 10 points to change from +1 to +2")
  const [addBtn, setAddBtn] = useState("display: block")
  const [show, toggleShow] = useState(true)
  
  
  function addOne(){
   if(plusOne === "+1"){
     const selectIndex = num +1
     setNum(selectIndex)
    }
    if(plusOne === "+2"){
      const addTwo= (num +2)
      setNum(addTwo)
    }
    if(plusOne === "+3"){
      const addThree= (num +3)
      setNum(addThree)
    }
    if(num >= 100){
            const noDisplay = "display: none"
            setAddBtn(noDisplay)
      const win= (<alert>
            <h2>You Win!</h2>
            <button onClick={() => window.location.reload(false)}>Play Again?</button>
              
           </alert>)
            setNum(win)

    }
  }
  
      function payTen(){
         if(num < 10){
          alert("You can't afford that!")
         }
         if(num >= 10 && plusOne === "+1"){
          const subTen = (num - 10)
          setNum(subTen)
          const changeTen = "+2"
          setPlusOne(changeTen)
          const changePayBn = "Pay 10 points to change from +2 to +3"
          setPayBtn(changePayBn)
        }
        if(num >= 10 && plusOne === "+2"){
          const subtractTen = (num - 10)
          setNum(subtractTen)
          const changeToThree = "+3"
          setPlusOne(changeToThree)
          const changePayBn = "Playing at +3 points"
          setPayBtn(changePayBn)
        }
        }
    return (
    

        <main>
          <p>Current Score:{num}</p>
          <button id={addBtn} onClick={addOne}>{plusOne}</button>
          <br></br>
          <br></br>
          <button id={payBtn} onClick={payTen}>{payBtn}</button>
        </main>
    );
}

export default App;
