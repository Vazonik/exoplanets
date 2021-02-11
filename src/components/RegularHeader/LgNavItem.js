import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import {
  lgNavItemStyle
} from './styles';

function LgNavItem({ Icon, label, to }) {
  const classes = lgNavItemStyle();
  const history = useHistory();

  const checkLink = () => {
    const path = history.location.pathname;
    return path === to || (path.includes("search") && to === "/search");
  }

  const getClass = () => {
    return checkLink() ? ` ${classes.actual}` : '';
  }

  const Parent = (children) => {
    if(checkLink()) {
      return children;
    }
    
    return <Link to={to}>{children}</Link>;
  }

  return Parent(
    <div className={classes.lgNavItem + getClass()}>
      <Icon className={classes.lgNavIcon} />
      <Typography className={classes.lgNavText}>{label}</Typography>
    </div>
  );
}

export default LgNavItem;