import { makeStyles } from '@material-ui/styles';

export const greatHeaderStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '70px',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'left',
    },
    overflow: 'hidden',
    background: 'rgba(0, 0, 0, 0) linear-gradient(45deg, #161616 0%, #122450 100%) repeat scroll 0% 0%;',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    }
  },
  planetPositioner: props => ({
    position: 'absolute',
    right: -props.planetSize / 2 + 15,
    bottom: -props.planetSize / 2
  }),
  logo: {
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      right: 40
    }
  },
  lgNav: {
    display: 'flex',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

export const logotypeStyle = makeStyles(theme => ({
  root: {
    zIndex: 1
  },
  text: {
    letterSpacing: 10,
    fontSize: 30,
    color: '#FFFFFFee',
    textShadow: '2px 2px 4px #09090975',
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      letterSpacing: 5
    }
  }
}));

export const lgNavItemStyle = makeStyles(theme => ({
  lgNavItem: {
    color: 'white',
    height: '100%',
    margin: '0 4px',
    padding: '0 6px',
    display: 'flex',
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    paddingTop: '3px',
    "&:hover": {
      color: 'rgb(187, 134, 252)',
      borderBottom: '3px solid rgb(187, 134, 252)'
    },
    "&:active": {
      color: 'rgb(127, 84, 192)',
      borderBottom: '3px solid rgb(127, 84, 192)'
    },
    userSelect: 'none',
    transition: 'all 0.2s ease-in-out',
    "::after": {
      content: '"test"',
      border: '1px solid red',
      width: '100%'
    }
  },
  lgNavIcon: {
    marginRight: '10px',
    fontSize: '21px'
  },
  lgNavText: {
    fontSize: '14px'
  },
  actual: {
    color: 'rgb(187, 134, 252)',
    borderBottom: '3px solid rgb(187, 134, 252)',
    cursor: 'auto',
    "&:active": {
      color: 'rgb(187, 134, 252)',
      borderBottom: '3px solid rgb(187, 134, 252)',
    }
  }
}));