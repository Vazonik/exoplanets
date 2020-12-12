import { makeStyles } from '@material-ui/styles';

export const mainPageMediaButtonStyle = makeStyles(theme => ({
  mediaButton: {
    margin: '5px',
    zIndex: 2,
    backgroundColor: '#ffffff20',
    boxShadow: '#ffffff20 0px 0px 2px 0px',
    border: '1px solid #ffffff20',
    "&:hover": {
      backgroundColor: `#8c9eff30`,
      border: `1px solid ${theme.palette.secondary.main}60`,
      boxShadow: `${theme.palette.secondary.main}40 0px 0px 4px 0px`,
    },
    backdropFilter: 'blur(2px)',
    "-webkit-backdrop-filter": 'blur(2px)'
  },
  mediaButtonContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
}));