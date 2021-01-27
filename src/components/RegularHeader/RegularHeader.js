import React from 'react';
import { Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import TableChartIcon from '@material-ui/icons/TableChart';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  greatHeaderStyle,
  logotypeStyle
} from './styles';
import Planet from '../Planet/Planet';
import LgNavItem from './LgNavItem';

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
    </div>
  );
}

const getPlanetSize = width => {
  if(width < 960) {
    return 2030 * (width / 1920);
  }

  return 400;
}

function RegularHeader() {
  const [planetSize, setPlanetSize] = React.useState(getPlanetSize(window.innerWidth));
  const classes = greatHeaderStyle({ planetSize });

  const updatePlanetSize = () => {
    setPlanetSize(getPlanetSize(window.innerWidth))
  }

  React.useEffect(() => {
    window.addEventListener("resize", updatePlanetSize);
    return () => { window.removeEventListener("resize", updatePlanetSize); }
  }, []);

  return (
    <header className={classes.root}>
      <div className={classes.planetPositioner}>
        <Planet size={planetSize} />
      </div>
      <div className={classes.logo}>
        <Logotype />
      </div>
      <div className={classes.lgNav}>
        <LgNavItem Icon={HomeIcon} to="/" label="Strona Główna" />
        <LgNavItem Icon={TableChartIcon} to="/chart" label="Tabela Egzoplanet" />
        <LgNavItem Icon={SearchIcon} to="/search" label="Wyszukiwarka" />
        <LgNavItem Icon={FavoriteIcon} to="/about-us" label="O Projekcie" />
      </div>
    </header>
  );
}

export default RegularHeader;