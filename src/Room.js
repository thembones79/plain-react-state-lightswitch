import React from "react";
import { connect } from "react-redux";

import { flipLight } from "./actions";

class Room extends React.Component {
  /*
  flipLight = () => {
      this.props.dispatch({type: SWITCH})
  };
  */

  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.props.flipLight}>flip</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLightOn: state.isLightOn
  };
}

export default connect(mapStateToProps, { flipLight })(Room);
