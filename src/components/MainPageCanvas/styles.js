import { makeStyles } from '@material-ui/styles';

export const mainPageCanvasStyle = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: 0,
    top: 200,
    width: "100%",
    minHeight: 'calc(100% - 200px)',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      top: 100,
      minHeight: 'calc(100% - 100px)',
    },
    backgroundColor: '#121212',
    padding: 0,
    boxShadow: '#121212 0px -1px 8px 0px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  particles: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  canvas: {
    padding: '20px',
    paddingTop: '1px',
    zIndex: 2,
    dipslay: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '100px',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    }
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '40px',
    marginBottom: '40px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px'
    }
  },
  mediaConainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '100px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px'
    }
  }
}));