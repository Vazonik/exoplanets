import { makeStyles } from "@material-ui/styles";

export const madeByStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#61616175",
    margin: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "60vh",
    width: "40vw",
    minWidth: "400px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      minHeight: "1000px",
    },
    "& > *": { margin: "5%" },
  },
  verticalLine: {
    borderLeft: "2px solid #ffffff50",
    height: "90%",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "none",
      borderBottom: "2px solid #ffffff50",
      height: "auto",
      width: "80%",
    },
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
