import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      incrementScore: 1,
    };
  }

  increment = () => {
    this.setState({
      currentScore: (this.state.currentScore += this.state.incrementScore),
    });
  };

  // event handler
  incrementBy1DecByCurrent = () => {
    this.setState({
      incrementScore: this.state.incrementScore + 1,
    });
    this.setState({ currentScore: this.state.currentScore - 10 });
    console.log(this.state.currentScore);
  };

  // alert message
  alertMessage = () => {
    alert("You can't afford that!");
  };

  // reset game
  resetGame = () => {
    this.setState({
      currentScore: 0,
      incrementScore: 1,
    });
  };

  render() {
    return (
      <main>
        {this.state.currentScore < 100 ? (
          <div>
            <p>Current Score: {this.state.currentScore}</p>
            <button onClick={this.increment}>
              {" "}
              +{this.state.incrementScore}
            </button>
            <button
              onClick={() =>
                this.state.currentScore >= 10
                  ? this.incrementBy1DecByCurrent()
                  : this.alertMessage()
              }
            >
              Pay 10 points to change from +{this.state.incrementScore} to +
              {this.state.incrementScore + 1}
            </button>
          </div>
        ) : (
          <div>
            You Win!
            <button onClick={() => this.resetGame()}>Play again?</button>
          </div>
        )}
      </main>
    );
  }
}

export default App;
