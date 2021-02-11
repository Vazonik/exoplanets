import React from 'react';
import Particles from 'react-particles-js';
import { starCanvasStyle, starContainersStyle } from './styles';
import particlesParams from './particlesStyle';

export function HeaderContainer({ children }) {
  const classes = starContainersStyle();
  return (
    <div className={classes.headerContainer}>
      {children}
    </div>
  );
}

export function ButtonsContainer({ children }) {
  const classes = starContainersStyle();
  return (
    <div className={classes.buttonsContainer}>
      {children}
    </div>
  );
}

export function MediaContainer({ children }) {
  const classes = starContainersStyle();
  return (
    <div className={classes.mediaConainer}>
      {children}
    </div>
  );
}

export function StarCanvas({ children, topOffset }) {
  if(!topOffset) {
    topOffset = {
      regular: 200,
      sm: 100
    }
  }

  console.log(topOffset);

  const classes = starCanvasStyle({ topOffset });

  return (
    <div className={classes.root}>
      <Particles
        className={classes.particles}
        params={particlesParams}
      />
      <div className={classes.canvas}>
        {children}
      </div>
    </div>
  );
}