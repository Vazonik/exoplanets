import { makeStyles } from "@material-ui/styles";

export const contactFormStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft: '15px',
    paddingLeft: '15px',
    borderLeft: '1px solid #00000030',
    minWidth: '300px',
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: 0,
      border: 0,
      marginTop: '15px',
      paddingTop: '15px',
      borderTop: '1px solid #00000030',
      minWidth: '100px',
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: '5px',
      width: '100%'
    },
  },
  h4: {
    display: 'block',
    paddingLeft: '5px',
    marginBottom: '5px'
  }
}));
