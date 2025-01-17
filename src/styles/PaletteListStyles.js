import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#c94b77",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    overflow: "auto"
  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, 22%)",
    gridGap: "2.5rem",
    [sizes.down("lg")]: {
      gridTemplateColumns: "repeat(3, 30%)"
    },
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "2.5rem"
    }
  }
};
