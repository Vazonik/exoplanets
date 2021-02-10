import React from "react";
import { TextField, Button, Icon, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { madeByFormStyle } from "./style";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MadeByForm() {
  const classes = madeByFormStyle();

  const [invalidDesc, setInvalidDesc] = React.useState(false);
  const [invalidMail, setInvalidMail] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleInvalidDesc = (event) => {
    event.preventDefault();
    setInvalidDesc(true);
  };
  const handleInvalidMail = (event) => {
    event.preventDefault();
    setInvalidMail(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (invalidDesc === false && invalidMail === false) {
      setSuccess(true);
      event.target.reset();
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccess(false);
    setInvalidDesc(false);
    setInvalidMail(false);
  };

  return (
    <div className={classes.root}>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Dziękujemy! Odezwiemy się wkrótce!
        </Alert>
      </Snackbar>
      <Snackbar
        open={invalidDesc + invalidMail}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Błąd! Wypełnij poprawnie formularz!
        </Alert>
      </Snackbar>

      <form
        className={classes.form}
        autoComplete="off"
        id="madeByForm"
        onSubmit={handleSubmit}
      >
        <TextField id="first-name" label="Imię" variant="filled" />
        <TextField id="second-name" label="Nazwisko" variant="filled" />
        <TextField
          id="email"
          label="E-Mail"
          error={invalidMail}
          type="email"
          variant="filled"
          onInvalid={handleInvalidMail}
          required
        />
        <TextField
          id="description"
          label="Opis"
          error={invalidDesc}
          multiline
          rows={4}
          variant="filled"
          onInvalid={handleInvalidDesc}
          required
        />
        <Button
          type="submit"
          form="madeByForm"
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

export default MadeByForm;
