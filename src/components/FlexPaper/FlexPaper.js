import React from "react";
import Paper from "@material-ui/core/Paper";

import { flexPaperStyle } from "./style";

function FlexPaper({ children }) {
  const classes = flexPaperStyle();

  return (
    <Paper className={classes.root}>
      {children}
    </Paper>
  );
}

export default FlexPaper;
