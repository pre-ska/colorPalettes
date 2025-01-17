import { DRAWER_WIDTH } from "../constants";
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: " flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    minHeight: "64px !important"
  },
  content: {
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    height: "calc(100vh - 64px)"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  formValidator: {
    margin: " 10px 20px 10px 30px"
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    // width: "100%"
  }
});

export default styles;
