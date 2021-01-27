import React from 'react';
import { useHistory } from 'react-router-dom'

import {
  Button,
  Typography
} from '@material-ui/core';
import { mainPageNavButtonStyle } from './styles.js';

export default function MainPageNavButton({Icon, text, link}) {
  const classes = mainPageNavButtonStyle();
  const history = useHistory();

  const redirectTo = () => {
    history.push(link);
  }

  return (
    <Button className={classes.navButton} onClick={redirectTo}>
      <div className={classes.navButtonContainer}>        
        <Icon className={classes.navButtonIcon} />
        <Typography className={classes.navButtonText}>{text}</Typography>
      </div>
    </Button>
  );
}