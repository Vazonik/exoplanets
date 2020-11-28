import { makeStyles } from '@material-ui/styles';

export const greatHeaderStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '200px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      height: '100px',
    }
  },
  planetPositioner: props => ({
    position: 'absolute',
    right: - props.planetSize / 2 + 50,
    bottom: - props.planetSize / 2
  })
}));

export const logotypeStyle = makeStyles(theme => ({
  root: {
    zIndex: 1
  },
  text: {
    letterSpacing: 20,
    fontSize: 65,
    color: '#FFFFFFee',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      letterSpacing: 12
    }
  },
  bigLine: {
    marginTop: 5,
    borderTop: '1px solid #FFFFFF80',
    marginRight: '3%'
  },
  smallLine: {
    borderBottom: '1px solid #FFFFFF60',
    height: 10,
    width: '30%'
  }
}));