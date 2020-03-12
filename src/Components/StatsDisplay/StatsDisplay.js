import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
    width: 100%;
    height: calc(100% - 84px);
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
    border: 1px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text_primary};
    border-radius: 4px;
`

const Title = styled.h1 `
    font-size: 2em;
    color: ${props => props.theme.colors.text_secondary};
    width: 100%;
    text-align: center;
    text-transform: uppercase;
`

const Header = styled.h1`
    text-align: center;
    text-transform: capitalize;
    color: ${props => props.theme.colors.text_secondary};
`

const Paragraph = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.text_ternary},
`


const StatsDisplay = (props) => {

    console.log(props.stats)

    let stats = Object.keys(props.stats);

    console.log(stats);

    let StatsItemArray = stats.map(key => {
        let content = props.stats[key];
        console.log(content)
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