import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  box: {
    width: "20%",
    height: "25%"
  }
};

class MiniColor extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: `${this.props.color}` }}
        className={this.props.classes.box}
      />
    );
  }
}

export default withStyles(styles)(MiniColor);
