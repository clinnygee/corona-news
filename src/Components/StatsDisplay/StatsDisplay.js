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
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.5em;
    border: 1px solid rgb(215, 218, 220);
    background-color: #1a1a1b;
    color: #fff;
    border-radius: 4px;
`

const Title = styled.h1 `
    font-size: 2em;
    color: #fff;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
`

const Header = styled.h1`
    text-align: center;
    text-transform: capitalize;
`

const Paragraph = styled.p`
    text-align: center;
`
const StatsDisplay = (props) => {

    let stats = Object.keys(props.stats);

    let StatsItemArray = stats.map(key => {
        let content = props.stats[key];
        return (<StatsItem title={key} content={content} key={key}/>)
    })

    console.log(stats);
    return (
        <StatsContainer>
            <Title>{props.searchTerm}</Title>
            {StatsItemArray}
        </StatsContainer>
    )
}

const StatsItem = props => {

    return (
        <StatItem>
            <Header>
                {props.title}
            </Header>
            <Paragraph>
                {props.content}
            </Paragraph>
        </StatItem>
        
    )
};

export default StatsDisplay;