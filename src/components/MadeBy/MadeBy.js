import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MadeByForm from "../MadeByForm/MadeByForm";
import { makeStyles } from "@material-ui/styles";
import { madeByStyle } from "./style";

const authorsStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  header: {
    marginLeft: "5%",
  },
}));

function Authors() {
  const classes = authorsStyle();

  return (
    <List className={classes.root}>
      <Typography variant="body1" className={classes.header}>
        Autorzy:
      </Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Dawid Draguła"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEMkjeIiCVvow/profile-displayphoto-shrink_200_200/0/1578646764736?e=1618444800&v=beta&t=z1npMosVlHbLSPxx8ekwA3A8XNrxv5RgziswalyF7xw"
          />
        </ListItemAvatar>
        <ListItemText primary="Dawid Draguła" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Krzysztof Bętkowski"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGo0xvkHSBabQ/profile-displayphoto-shrink_200_200/0/1612947358310?e=1618444800&v=beta&t=-74wnekye4LR9ECrc2AE5hMdwEjJOednQXS0_aABSxw"
          />
        </ListItemAvatar>
        <ListItemText primary="Krzysztof Bętkowski" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Mikołaj Rams" />
        </ListItemAvatar>
        <ListItemText primary="Mikołaj Rams" />
      </ListItem>
    </List>
  );
}

function MadeBy() {
  const classes = madeByStyle();

  return (
    <Paper className={classes.root}>
      <Typography variant="h6">
        Exoplanets
        <Typography variant="body1">
          Nasz projekt z załozenia ma ułatwić entuzjastom astronomii i
          astrologii dostęp do informacji dostępnych w sposób trudny i
          nieczytelny. Chcieliśmy zaoszczędzić Wam - Drodzy Użytkownicy - tak
          bardzo cenny czas, który teraz możecie spożytkować w dużo
          przyjemniejszy sposób.
        </Typography>
        <br />
        <Authors />
      </Typography>
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
