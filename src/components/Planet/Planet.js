import React from 'react';
import { planetStyle } from './styles';

function Planet(props) {
  const classes = planetStyle({ size: props.size || 200 });

  return (
    <div {...props} className={classes.planet + (props.className ? ` ${props.className}` : '')}></div>
  );
}

export default Planet;