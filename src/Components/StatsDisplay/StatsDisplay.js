import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
    width: 100%;
    height: calc(100% - 34px);
    display: flex;
    flex-wrap: wrap;
    padding: 16px 16px 16px 16px;
    align-items: center;
    justify-content: center;
    `
const StatItem = styled.div`
    width: 30%;
    height: 40%;
    background-color: white;
`
const StatsDisplay = (props) => {
    return (
        <StatsContainer>
            <StatsItem>

            </StatsItem>
        </StatsContainer>
    )
}

const StatsItem = props => {

    return (
        <React.Fragment>
            <StatItem></StatItem>
            <StatItem></StatItem>
            <StatItem></StatItem>
            <StatItem></StatItem>
            <StatItem></StatItem>
            <StatItem></StatItem>
        </React.Fragment>
        
    )
};

export default StatsDisplay;