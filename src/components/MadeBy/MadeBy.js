import React from "react";
import { Typography, Paper } from "@material-ui/core";
import MadeByForm from "../MadeByForm/MadeByForm";
import { madeByStyle } from "./style";

function MadeBy() {
  const classes = madeByStyle();

  return (
    <Paper className={classes.root}>
      <Typography variant="h6">Lorem ipsum</Typography>
      <div className={classes.verticalLine} />
      <div className={classes.formContainer}>
        <Typography variant="h7">
          Chcesz się z nami skontaktować? Wypełnij formularz!
        </Typography>
        <MadeByForm />
      </div>
    </Paper>
  );
}

export default MadeBy;
