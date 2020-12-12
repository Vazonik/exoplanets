import { createMuiTheme } from '@material-ui/core';
import {
  deepPurple,
  indigo
} from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: deepPurple.A700,
      light: deepPurple[500],
      dark: deepPurple[700]
    },
    secondary: {
      main: indigo.A700,
      light: indigo[500],
      dark: indigo[700]
    },
    background: {
      default: '#242424'
    }
  }
});

