import React from "react";
import "./App.css";
import {useState} from "react"
function App () {
  const [count,setCount]=useState(0)
  const [point,setPoint]=useState(1)
  //const [win, setWin]=useState(true)
  
  const increment = (()=>{
    setCount(count + point)
   
  })
  
  const onPints=(()=>{
    if(count >= 10){
      setPoint(point + 1)
      setCount(count - 10)
     }else{
      alert(`You can't afford that!`)

     }
    
     
  })
const playGame = (()=>{
    setCount(0);
    setPoint(1);
  })
    return (
      <main>
        {count < 100 ? (
        <div>
          <h1>Current Score: {count}</h1>
         <p>Current Score: {count}</p> 
        <button onClick={increment}>+{point}</button>
        <br></br>
         <p>Pays :{point}</p>
        <button onClick={onPints}>Pay 10 points to change from +{point} to +{point+1}</button>
        </div>
      ):null}
       {count >= 100 ? (
        <div>
          <h1>You Win!</h1>
          <button onClick={playGame}>Play again?</button>
        </div>
      ) : null}

      </main>
    );
}

export default App;
