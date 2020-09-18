import React, { Component } from "react";
import ResultInfo from "./ResultInfo";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      ran: "",
      id: "",
      temp: Math.floor(Math.random() * 3 + 1),
      userPoint: 0,
      pcPoint: 0,
      roundLimit: 10,
      roundWinner: ""
    };

    this.lottery = this.lottery.bind(this);
  }

  lottery = (event, temp) => {
    const users_choice = event.target.id;
    this.setState({ id: users_choice });
    const PC_choice = ["bunny", "carrot", "gun"][
      Math.floor(Math.random() * 3)
    ];
    this.setState({ ran: PC_choice });
    console.log("pc; state =", this.state.ran, "but variable =", PC_choice);
    console.log("user: state =", this.state.id, "but variable =", users_choice);
    if (
      (users_choice === "bunny" && PC_choice === "carrot") ||
      (users_choice === "carrot" && PC_choice === "gun") ||
      (users_choice === "gun" && PC_choice === "bunny")
    ) {
      this.setState(({ userPoint, roundWinner }) => ({
        userPoint: userPoint + 1,
        roundWinner: "You- Well Done! :-)"
      }));
    } else if (users_choice === PC_choice) {
      this.setState(({ roundWinner }) => ({
        roundWinner: "Draw"
      }));
    } else {
      this.setState(({ pcPoint, roundWinner }) => ({
        pcPoint: pcPoint + 1,
        roundWinner: "Computer- Bad Luck! :-("
      }));
    }
  };
  render(props) {
    return (
      <>
      
        <button onClick={this.lottery} id="bunny">
          bunny
        </button>
        <button onClick={this.lottery} id="carrot">
          carrot
        </button>
        <button onClick={this.lottery} id="gun">
          gun
        </button>
        <ResultInfo
          id={this.state.id}
          ran={this.state.ran}
          roundWinner={this.state.roundWinner}
          userPoint={this.state.userPoint}
          pcPoint={this.state.pcPoint}
        />
      </>
    );
  }
}

export default Counter;
