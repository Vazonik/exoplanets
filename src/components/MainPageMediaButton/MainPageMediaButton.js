import React from 'react';
import { IconButton } from '@material-ui/core';
import { mainPageMediaButtonStyle } from './styles.js';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function MainPageMediaButton({enumIcon, link}) {
  const classes = mainPageMediaButtonStyle();

  const getIcon = (icon) => {
    switch(icon) {
      case "twitter":
        return <TwitterIcon />;
      default:
        return <img src="/exoplanets/res/pk-logo.png" width="20px" alt="pk" />
    }
  };

  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <IconButton className={classes.mediaButton}>     
        {getIcon(enumIcon)}
      </IconButton>
    </a>
  );
}