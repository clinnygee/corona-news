import React, {useState, useEffect} from "react"
import styled from 'styled-components';
import StatsDisplay from '../StatsDisplay';
import AutoSuggest from './AutoSuggest'
import {LoadingSymbol} from '../ReusableComponents';
import Toggle from '../Toggle';

import {apiCoronaCall} from '../../API';

const SearchContainer = styled.div`
    width: 300px;
    min-height: 400px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 4px;
    padding: 16px 0 16px 0;
    border: 1px solid ${props => props.theme.colors.border_dark}
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

// const SearchInput = styled.input`
//     width: 80%;
//     height: 80%;
//     background-color: ${props => props.theme.colors.secondary};
//     border-radius: 4px;
//     padding: 0 16px 0 16px;
//     border: 1px solid ${props => props.theme.colors.border_dark};
//     color: ${props => props.theme.colors.color};

//     &:focus {
//         background-color: ${props => props.theme.colors.primary};
//         border: 1px solid ${props => props.theme.colors.border} !important;
//         outline: none;
//     }
// `

const SearchBox = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [update, setUpdate] = useState(false);
    
    const [stats, setStats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        apiCoronaCall(searchTerm).then(response => {
            setStats(response);
            setIsLoading(false);
            console.log(response)
        });
        setSearchTerm('');
    }, [update]);

    const onSearchSubmit = () => {
        setUpdate(!update);
        props.updateContextSearchTerm(searchTerm);
    }
    // props.getAllStats();

    const handleKeyPress = (event) => {
        console.log(event.key)
        if(event.key === 'Enter'){
            onSearchSubmit();
            // setSearchTerm('');
            
            
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
            {isLoading || stats === null ? <LoadingSymbol /> : <StatsDisplay stats={stats} searchTerm={props.searchTerm}/>}
            {/* <StatsDisplay stats={stats}>

            </StatsDisplay> */}
            {/* insert here coronastats */}
            {/* <ToggleContainer>
                <Toggle isDark={props.isDark} toggleIsDark={props.toggleIsDark}/>
            </ToggleContainer> */}
            <Toggle isDark={props.isDark} toggleIsDark={props.toggleIsDark} />
            
        </SearchContainer>
    )
};



export default SearchBox;