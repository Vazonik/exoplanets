import React from 'react';

import { planetStyle } from './styles';
import getStarColor from './starColor';

function Planet(props) {
  const classes = planetStyle({ size: props.size || 200 });
  let style = {};
  let unknown = false;

  if (props.starOptions !== undefined) {
    const { temperature } = props.starOptions;
    style = {
      backgroundColor: getStarColor(temperature)
    }

    unknown = !temperature;
  }
  
  if (props.planetOptions !== undefined) {
    style = {
      backgroundColor: 'green'
    };
  }

  return (
    <div className={classes.planet + (props.className ? ` ${props.className}` : '')} style={style}>
      {unknown && "?"}
    </div>
  );
}

export default Planet;