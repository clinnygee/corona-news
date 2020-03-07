import React, {useState, useEffect} from "react"
import styled from 'styled-components';
import StatsDisplay from '../StatsDisplay'

const SearchContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: #2b2b2c;
`

const SearchBarContainer = styled.div`
    width: 100%;
    height: 34px;
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

    props.getAllStats();


    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchForm>
                    <SearchInput />
                </SearchForm>
            </SearchBarContainer>
            <StatsDisplay>

            </StatsDisplay>
            {/* insert here coronastats */}
        </SearchContainer>
    )
}

export default SearchBox;