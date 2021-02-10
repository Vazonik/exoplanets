import { makeStyles } from "@material-ui/styles";

export const madeByFormStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
