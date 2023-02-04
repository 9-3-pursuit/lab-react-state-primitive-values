import React from "react";
import "./App.css";
import {render} from "@testing-library/react";


class App extends React.Component {


// function App () {
  render() {
    return  (

    

      <main>
        <p>React State Lab</p>
        <p></p>
      </main>
    );
    
}
constructor (){

  super();
  this.state = {
    score: 0,
    addButton: 1,
  };
}
upgrade () {

  if(this.state.score >= 10){
     this.setState({addButton: this.state.addButton + 1});
     this.setState({score: this.state.score - 10});

  }else{
    alert("You can't afford that!");

  }
}
increment() {
  this.setState({score: this.state.score + this.state.addButton});
}
restart () {
  
}

export default App;
