import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0px'
  }
}));

const WmartSearch = props => {
  const {
    dropdownOptions,
    suggestions,
    onTyping,
    onSearchClick,
    placeholder,
    onDropdownChange,
    dropdownSelectedValue,
    onSuggestionClick,
    inputValue
  } = props;
  const classes = useStyles();
  const [searchedVal, setSearchedVal] = useState(inputValue);
  const [dropdownSelectedvalueParam, setDropdownSelectedValueParam] = useState(dropdownSelectedValue);

  const handleChangeInput = e => {
    setSearchedVal(e.target.value);
    onTyping(e.target.value);
  };

  return /*#__PURE__*/React.createElement(FormControl, {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(OutlinedInput, {
    id: "outlined-adornment-amount",
    value: searchedVal,
    className: classes.root,
    onChange: handleChangeInput,
    startAdornment: dropdownOptions ? /*#__PURE__*/React.createElement(InputAdornment, {
      position: "start"
    }, /*#__PURE__*/React.createElement(TextField, {
      select: true,
      value: dropdownSelectedvalueParam,
      onChange: e => {
        setDropdownSelectedValueParam(e.target.value);
        onDropdownChange(e.target.value);
      },
      variant: "filled"
    }, dropdownOptions.map(option => /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label)))) : null,
    endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
      position: "end"
    }, /*#__PURE__*/React.createElement(IconButton, {
      "aria-label": "toggle password visibility",
      onClick: onSearchClick,
      edge: "end"
    }, /*#__PURE__*/React.createElement(SearchIcon, null)))
  }));
};

export default WmartSearch;