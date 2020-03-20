import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';

import {textShortener} from '../../Helpers';

const Container = styled.div`
    height: 250px;
    width: 100%;
    background-color: ${props => props.theme.colors.article_background};
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
    background-color: ${props => props.theme.colors.primary};
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
    color: ${props => props.theme.colors.text_ternary};
    font-size: 12px;
    padding: 4px 4px 4px 4px;
`

const Title = styled.h1`
    color: ${props => props.theme.colors.text_secondary};
    font-size: 18px;
    padding: 4px 4px 4px 4px;
`

const Description = styled.p`
    color: ${props => props.theme.colors.text_ternary};
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

    // console.log(props)

    const imageRef = createRef();

    // console.log(imageRef.current);

    const titleRef = createRef();

    const setSpans = () => {
        console.log(titleRef);
    };

    useEffect(() => {
        // titleRef.current.addEventListener('load', setSpans);
        console.log(titleRef);
        console.log(imageRef.current.height);
    })

    // titleRef.current.addEventListener('load', setSpans);

    
    // console.log(titleRef)

    return (
        <Container>
            <LeftContainer>

            </LeftContainer>
            <RightContainer>
                <TextContainer>
                    <Author>
                        Author: {props.author}
                    </Author>
                    <Title ref={titleRef}>
                        {props.title.length > 80 ? textShortener(props.title, 80) : props.title}
                    </Title>
                    <Description>
                        {props.description !== null && props.description.length > 50 ? textShortener(props.description, 80) : props.description}
                    </Description>
                    <LinkToArticle href={props.url}>
                        {textShortener(props.url, 30)}
                    </LinkToArticle>
                </TextContainer>
                <ImageContainer>
                    <Image  ref={imageRef} src={props.imageUrl} alt={`image for ${props.title}`}/>
                </ImageContainer>
            </RightContainer>
        </Container>
    )

}

export default NewsArticle;