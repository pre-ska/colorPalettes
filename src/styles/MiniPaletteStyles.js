export default {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: "gray",
    height: "150px",
    width: "100%",
    overflow: "hidden",
    borderRadius: "5px"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    float: "left"
    // display: "inline-block",
    // margin: "0 auto",
    // position: "relative"
    // marginBottom: "-3.5px"
  },
  delete: {},
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20Px",
    position: "absolute",
    right: 0,
    top: 0,
    padding: "10px",
    zIndex: 10,
    opacity: 0,
    transition: "opacity 0.2s ease-in-out"
  }
};
