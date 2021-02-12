import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { searchFieldStyles } from './style';

function SearchField(props) {
  const classes = searchFieldStyles();

  const [value, setValue] = React.useState(props.value);

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleKeyDown = e => {
    if(e.key === "Enter") {
      props.searchCallback(value);
    }
  }

  const handleButtonClick = () => {
    props.searchCallback(value);
  }

  return (
    <Paper className={classes.root}>
      <TextField
        label="Szukaj"
        variant="outlined"
        value={value}
        className={classes.textfield}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        color="secondary"
        variant="contained"
        className={classes.button}
        onClick={handleButtonClick}
      >
        Szukaj
      </Button>
    </Paper>
  );
}

export default SearchField;