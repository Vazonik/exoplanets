import React from 'react';

import {
  greatHeaderStyle,
  logotypeStyle
} from './styles';
import Planet from '../Planet/Planet';
import { Typography } from '@material-ui/core';

function Logotype() {
  const classes = logotypeStyle();

  return (
    <div className={classes.root}>
      <Typography
      className={classes.text}
      variant="h2"
      >
        Exoplanets
      </Typography>
      <div className={classes.bigLine}>
        <div className={classes.smallLine}></div>
      </div>
    </div>
  );
}

const getPlanetSize = width => 2030 * (width / 1920);

function GreatHeader() {
  let [planetSize, setPlanetSize] = React.useState(getPlanetSize(window.innerWidth));
  const classes = greatHeaderStyle({ planetSize });

  const updatePlanetSize = () => {
    setPlanetSize(getPlanetSize(window.innerWidth))
  }

  React.useEffect(() => {
    window.addEventListener("resize", updatePlanetSize);
    return () => { window.removeEventListener("resize", updatePlanetSize); }
  });

  return (
    <header className={classes.root}>
      <div className={classes.planetPositioner}>
        <Planet size={planetSize} />
      </div>
      <Logotype />
    </header>
  );
}

export default GreatHeader;