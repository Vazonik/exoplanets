import { makeStyles } from '@material-ui/styles';

export const mainPageNavButtonStyle = makeStyles(theme => ({
  navButton: {
    display: 'block',
    margin: '10px',
    width: 280,
    height: 280,
    zIndex: 10,
    borderRadius: '0px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 100,
    },
    textDecoration: 'none',
    backdropFilter: 'blur(2px)',
    "-webkit-backdrop-filter": 'blur(2px)',
    backgroundColor: '#ffffff05',
    boxShadow: '#ffffff10 0px 0px 2px 0px',
    border: '1px solid #ffffff10',
    "&:hover": {
      backgroundColor: `#8c9eff10`,
      border: `1px solid ${theme.palette.secondary.main}60`,
      boxShadow: `${theme.palette.secondary.main}40 0px 0px 4px 0px`,
    },
  },
  navButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  navButtonIcon: {
    fontSize: '200px',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
    },
    textShadow: '2px 2px 4px #09090975'
  },
  navButtonText: {
    display: 'block',
    textShadow: '2px 2px 4px #09090975',
  }
}));