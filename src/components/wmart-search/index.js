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

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: '0px'
    }
}));

const WmartSearch = (props) => {
    const { dropdownOptions, suggestions, onTyping, onSearchClick, placeholder, onDropdownChange, dropdownSelectedValue, onSuggestionClick, inputValue } = props;
    const classes = useStyles();
    const [searchedVal, setSearchedVal] = useState(inputValue);
    const [dropdownSelectedvalueParam, setDropdownSelectedValueParam] = useState(dropdownSelectedValue);

    const handleChangeInput = (e) => {
        setSearchedVal(e.target.value);
        onTyping(e.target.value);
    }

    return <FormControl fullWidth variant="outlined">
        <OutlinedInput
            id="outlined-adornment-amount"
            value={searchedVal}
            className={classes.root}
            onChange={handleChangeInput}
            startAdornment={
                dropdownOptions ? <InputAdornment position="start">
                    <TextField
                        select
                        value={dropdownSelectedvalueParam}
                        onChange={(e) => {
                            setDropdownSelectedValueParam(e.target.value);
                            onDropdownChange(e.target.value);
                        }}
                        variant="filled"
                    >
                        {dropdownOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </InputAdornment> : null
            }
            endAdornment={
                <InputAdornment position="end">
                    {/* <SearchIcon onClick={onSearchClick} edge="end"></SearchIcon> */}
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={onSearchClick}
                        edge="end"
                    >
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            }
        />
    </FormControl>
}

export default WmartSearch;
