import React from 'react';
import Typography from '@material-ui/core/Typography';

import { aboutProjectDivStyle } from './style';

function AboutProjectDiv({ children }) {
  const classes = aboutProjectDivStyle();

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        className={classes.h4}
      >
        O Projekcie
      </Typography>
      {children}
    </div>
  );
}

export default AboutProjectDiv;