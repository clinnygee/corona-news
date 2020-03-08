import React from 'react';
import styled from 'styled-components';

import {textShortener} from '../../Helpers';

const Container = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(26, 26, 27, 0.8);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 4px;
    margin: 16px 0px 16px 0px;
`

const LeftContainer = styled.div`
    
    height: 100%;
    width: 25px;
`
const RightContainer = styled.div`
    height: 100%;
    width: calc(100% - 25px);
    background-color: #2b2b2c;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const TextContainer = styled.div`
    width: calc(100% - 100px);

`

const ImageContainer = styled.div`
    width: 100px;
    padding: 10px 10px 10px 10px;
`

const Author = styled.h3`
    color: rgb(129,131,132);
    font-size: 12px;
    padding: 4px 4px 4px 4px;
`

const Title = styled.h1`
    color: rgb(215,218,220);
    font-size: 18px;
    padding: 4px 4px 4px 4px;
`

const Description = styled.p`
    color: rgb(129,131,132);
    font-size: 14px;
    padding: 4px 4px 4px 4px;
`


const LinkToArticle = styled.a`
    color: rgb(79,188,255);
    font-size: 12px;
    padding: 4px 4px 4px 4px;
`
const Image = styled.img`
    width: 85px;
    height: 85px;
`

const NewsArticle = (props) => {

    return (
        <Container>
            <LeftContainer>

            </LeftContainer>
            <RightContainer>
                <TextContainer>
                    <Author>
                        Author: {props.author}
                    </Author>
                    <Title>
                        {props.title.length > 80 ? textShortener(props.title, 80) : props.title}
                    </Title>
                    <Description>
                        {props.description.length > 50 ? textShortener(props.description, 80) : props.description}
                    </Description>
                    <LinkToArticle href={props.url}>
                        {textShortener(props.url, 30)}
                    </LinkToArticle>
                </TextContainer>
                <ImageContainer>
                    <Image src={props.imageUrl} alt={`image for ${props.title}`}/>
                </ImageContainer>
            </RightContainer>
        </Container>
    )

}

export default NewsArticle;