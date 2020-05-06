import React, { Component } from "react";
// import classNames from "classnames";
// import { withStyles } from "@material-ui/core/styles";
// import PaletteFormNav from "./PaletteFormNav";
// import Drawer from "@material-ui/core/Drawer";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";

import { withStyles } from "@material-ui/core/styles";

// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";

import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import DraggableColorList from "./DraggableColorList";
import styles from "./styles/ColorPickerFormStyles";
// import arrayMove from "array-move";

class ColorPickerForm extends Component {
  state = {
    currentColor: "teal",
    newColorName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorValueUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  };
  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm
          className={classes.formValidator}
          // ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}>
          <TextValidator
            label="Color name"
            className={classes.colorNameInput}
            onChange={this.handleChange}
            margin="normal"
            name="newColorName"
            value={newColorName}
            validators={["required", "isColorNameUnique", "isColorValueUnique"]}
            errorMessages={[
              "this field is required",
              "Color name must be unique",
              "Color must be unique"
            ]}
          />
          <Button
            variant="contained"
            className={classes.addColor}
            type="submit"
            color="primary"
            style={{
              backgroundColor: paletteIsFull ? "gray" : currentColor
            }}
            disabled={paletteIsFull}>
            {paletteIsFull ? "Palette full" : "Add color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
