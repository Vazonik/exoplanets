import React from "react";
import { TextField, Button, Icon, Typography } from "@material-ui/core";
import { madeByStyle } from "./style";

function MadeBy() {
  const classes = madeByStyle();

  return (
    <div className={classes.root}>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Typography variant="h7">
        Chcesz się z nami skontaktować? Wypełnij formularz!
      </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="first-name" label="Imię" variant="filled" />
        <TextField id="second-name" label="Nazwisko" variant="filled" />
        <TextField id="email" label="E-Mail" type="email" variant="filled" />
        <TextField
          id="description"
          label="Opis"
          multiline
          rows={4}
          variant="filled"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default MadeBy;
