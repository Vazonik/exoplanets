import { makeStyles } from "@material-ui/styles";

export const foundPlanetStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minWidth: "716px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "100px",
      borderRadius: 0,
    },
    marginBottom: "20px",
  },
  headerContainer: {
    display: "flex",
    alignItems: "baseline",
    "& > *": { margin: "5px" },
  },
  tableContainer: {
    backgroundColor: "#484848",
    marginTop: "10px",
  },
}));
