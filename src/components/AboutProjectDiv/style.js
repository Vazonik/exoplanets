import { makeStyles } from '@material-ui/styles';

export const aboutProjectDivStyle = makeStyles(theme => ({
  root: {
    maxWidth: '500px',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '100%',
      width: '100%'
    },
    textAlign: 'justify'
  },
  h4: {
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center'
    }
  }
}));