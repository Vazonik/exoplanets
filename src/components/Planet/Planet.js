import React from 'react';
import { planetStyle } from './styles';

function Planet({ size=100 }) {
  const classes = planetStyle({ size });

  return (
    <div className={classes.planet}></div>
  );
}

export default Planet;