import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

/*
** Props:- dropdownOptions, onDropdownChange, dropdownSelectedValue
** Required Props:- onSearchClick
** Types of all Props :-
** dropdownOptions: [{label: any, value: any}]
** onDropdownChange: function(dropdownSelectedValue)
** dropdownSelectedValue: string
** onSearchClick: function()
*/

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
