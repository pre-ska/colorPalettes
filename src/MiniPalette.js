import React, { Component } from "react";
// import MiniColor from "./MiniColor";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends Component {
  deletePalette = e => {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  };

  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props;
    const miniColorBoxes = colors.map(c => (
      <div
        key={c.name}
        className={classes.miniColor}
        style={{ backgroundColor: c.color }}
      />
    ));
    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={this.deletePalette}
        />

        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>{" "}
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
