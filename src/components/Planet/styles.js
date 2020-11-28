import { makeStyles } from '@material-ui/styles';

export const planetStyle = makeStyles(theme => ({
  planet: props => ({
    width: props.size,
    height: props.size,
    borderRadius: props.size / 2,
    backgroundColor: theme.palette.primary.main,
    boxShadow: '#090909 0px 7px 8px 0px'
  })
}));