import { makeStyles } from "@material-ui/styles";

export const authorsStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    minWidth: '250px',
    borderTop: '1px solid #00000030'
  },
  inline: {
    display: "inline",
  },
  header: {
    marginLeft: "5px",
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center'
    }
  },
}));