import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { authorsStyle } from './style';

export default function Authors() {
  const classes = authorsStyle();

  return (
    <List className={classes.root}>
      <Typography variant="h5" className={classes.header}>
        Autorzy
      </Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Dawid Draguła"
            src="/res/authors/dd.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary="Dawid Draguła" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Krzysztof Bętkowski"
            src="/res/authors/kb.jpg"
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