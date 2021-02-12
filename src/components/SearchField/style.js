import { makeStyles } from '@material-ui/styles';

export const searchFieldStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      borderRadius: 0,
      marginBottom: '0px'
    }
  },
  textfield: {
    marginRight: '10px',
    minWidth: '600px',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      minWidth: 0
    }
  },
  button: {
    paddingTop: '15px',
    paddingBottom: '15px'
  }
}));