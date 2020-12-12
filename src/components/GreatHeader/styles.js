import { makeStyles } from '@material-ui/styles';

export const greatHeaderStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '200px',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'rgba(0, 0, 0, 0) linear-gradient(45deg, #161616 0%, #122450 100%) repeat scroll 0% 0%;',
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
    textShadow: '2px 2px 4px #09090975',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      letterSpacing: 12
    }
  },
  bigLine: {
    marginTop: 2,
    borderTop: '1px solid #FFFFFF60',
    marginRight: '3%'
  },
  smallLine: {
    borderBottom: '1px solid #FFFFFF60',
    height: 7,
    width: '29%'
  }
}));