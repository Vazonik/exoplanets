import React from 'react';
import Particles from 'react-particles-js';
import { mainPageCanvasStyle } from './styles';
import particlesParams from './particlesStyle';

export function HeaderContainer({ children }) {
  const classes = mainPageCanvasStyle();
  return (
    <div className={classes.headerContainer}>
      {children}
    </div>
  );
}

export function ButtonsContainer({ children }) {
  const classes = mainPageCanvasStyle();
  return (
    <div className={classes.buttonsContainer}>
      {children}
    </div>
  );
}

export function MediaContainer({ children }) {
  const classes = mainPageCanvasStyle();
  return (
    <div className={classes.mediaConainer}>
      {children}
    </div>
  );
}

export function MainPageCanvas({ children }) {
  const classes = mainPageCanvasStyle();

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