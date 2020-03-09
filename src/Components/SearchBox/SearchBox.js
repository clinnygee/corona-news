import React, {useState, useEffect, createContext} from "react"
import styled from 'styled-components';
import StatsDisplay from '../StatsDisplay';
import AutoSuggest from './AutoSuggest'
import {LoadingSymbol} from '../ReusableComponents';

import {apiCoronaCall} from '../../API';

const SearchContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: #2b2b2c;
    border-radius: 4px;
    padding: 16px 0 16px 0;
`

const SearchBarContainer = styled.div`
    width: 100%;
    height: 60px;
`

const SearchForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchInput = styled.input`
    width: 80%;
    height: 80%;
    background-color: #474748;
    border-radius: 4px;
    padding: 0 16px 0 16px;
    border: 1px solid rgb(52, 53, 54);
    color: rgb(215, 218, 220);

    &:focus {
        background-color: rgb(26, 26, 27);
        border: 1px solid rgb(215, 218, 220) !important;
        outline: none;
    }
`

const SearchBox = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    
    const [stats, setStats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        apiCoronaCall().then(response => {
            setStats(response);
            setIsLoading(false);
            console.log(response)
        })
    }, []);

    const onSearchSubmit = () => {
        props.updateContextSearchTerm(searchTerm);
    }
    // props.getAllStats();

    const handleKeyPress = (event) => {
        console.log(event.key)
        if(event.key === 'Enter'){
            onSearchSubmit();
            setSearchTerm('');
            
            
        }
    };

    const handleInputChange = (value) => {
        setSearchTerm(value);
    }


    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchForm >
                    {/* <SearchInput placeholder={'Search'} onChange={handleInputChange} onKeyPress={handleKeyPress} value={searchTerm}/> */}
                    <AutoSuggest onChange={handleInputChange} onKeyPress={handleKeyPress} value={searchTerm}/>
                </SearchForm>
            </SearchBarContainer>
            {isLoading ? <LoadingSymbol /> : <StatsDisplay stats={stats} searchTerm={props.searchTerm}/>}
            {/* <StatsDisplay stats={stats}>

            </StatsDisplay> */}
            {/* insert here coronastats */}
        </SearchContainer>
    )
}

export default SearchBox;