import { makeStyles } from "@material-ui/styles";

export const flexPaperStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#242424",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: '20px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      width: '100%',
      height: '100%'
    }
  }
}));
