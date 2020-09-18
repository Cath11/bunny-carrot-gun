import React, { Component } from "react";

class ReactInfo extends Component {
  render(props) {
    return (
      
      <>
        <div>Your choice: {`${this.props.id}`}</div>
        <div>Computer's choice: {`${this.props.ran}`}</div>
        <div>Round Winner: {`${this.props.roundWinner}`}</div>
        <div>Your Points: {`${this.props.userPoint}`}</div>
        <div>Computer's Points: {`${this.props.pcPoint}`}</div>
      </>
    );
  }
}
export default ReactInfo;


