import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
  return (
    <footer className={props.classes.PaletteFooter}>{props.paletteName}</footer>
  );
}

export default withStyles(styles)(PaletteFooter);
