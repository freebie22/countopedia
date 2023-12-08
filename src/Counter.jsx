import React from "react";
import Attack from "./images/attack.png";
import Defend from "./images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      lastState: "",
      gameStatus: ""
    };
  }

  handleAttack = () => {
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round((Math.random() * 10));
      return {
        count: newCount,
        lastState: "Attack",
        gameStatus: newCount > 10 ? "You Won!!!" : ""
      };
    });
    // this.setState({ count: this.state.count + 10 });
  }

  handleDefence = () => {
    // this.setState({ count: this.state.count - 10 });
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round((Math.random() * 10));
      return{
        count: newCount,
        lastState : "Defence",
        gameStatus: newCount < -10 ? "You Lost!!!" : ""
      }
    });
  }

  handleRandomPlay= () => {
    let playMode = Math.round(Math.random);
    if(playMode === 0)
    {
        this.handleAttack();
    }
    else
    {
        this.handleDefence();
    }
  }

  handleReset = () => {
    alert("The game has been restarted!");
    this.setState(() => {
        return{
            count: 0,
            gameStatus: "",
            lastState: ""
        }
    });
  }

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play: {this.state.lastState} </p>
        <h2>Game Status: {this.state.gameStatus} </h2>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={Attack}
            alt="Attack"
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={Defend}
            alt="Defend"
            onClick={this.handleDefence}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button onClick={this.handleRandomPlay} className="btn btn-secondary w-100 mt-2">Random Play</button>
          <br />
          <button onClick={this.handleReset} className="btn btn-warning w-100 mt-2">Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
