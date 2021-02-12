import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import { searchFieldStyles } from "./style";

function SearchField(props) {
  const classes = searchFieldStyles();

  const [value, setValue] = React.useState(props.value);
  const [inputValue, setInputValue] = React.useState("");

  const options = props.exoplanets.map((option) => {
    const firstLetter = option.pl_name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const filterOptions = createFilterOptions({
    limit: 20,
  });

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (e, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.searchCallback(inputValue);
    }
  };

  const handleButtonClick = () => {
    props.searchCallback(inputValue);
  };

  return (
    <Paper className={classes.root}>
      <Autocomplete
        freeSolo
        value={value}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        getOptionLabel={(option) => option.pl_name}
        filterOptions={filterOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Szukaj"
            variant="outlined"
            className={classes.textfield}
            InputProps={{ ...params.InputProps }}
          />
        )}
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
