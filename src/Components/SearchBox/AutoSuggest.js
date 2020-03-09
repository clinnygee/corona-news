import React, {useState, useEffect} from 'react';
import Autosuggest from 'react-autosuggest';
import styled from 'styled-components'
import inputTheme from './input.css';
import {countries} from '../../Helpers'

const Suggestion = styled.div`
    background-color: rgb(26, 26, 27);
    border: 1px solid rgb(215,218,221);
    color: rgb(215,218,221);
    width: 95%;
    border-radius: 4px;
    padding: 4px 4px 4px 4px;

`

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : countries.filter(count => {
        return (count.country.toLowerCase().slice(0, inputLength) === inputValue)
    })
};
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.country;

const renderSuggestion = suggestion => {
    return (
        <Suggestion>
            {suggestion.country}
        </Suggestion>
            
        
    )
}

const AutoSuggest = props => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const onChange = (e, {newValue}) => {
        setValue(newValue);
        console.log(newValue)
        props.onChange(newValue);
    }

    const onSuggestionsFetchRequested = ({value}) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    }

    const inputProps = {
        placeholder: 'Search',
        value,
        onChange: onChange,
        onKeyPress: props.onKeyPress,
    }

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onKeyPress={props.onKeyPress}
            theme={inputTheme}
        />
    )
};

export default AutoSuggest;