import React, { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import {apiNewsCall} from '../../API';
import NewsArticle from './NewsArticle';
import {Context} from '../../context';

const Container = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 16px 0 16px 0;
`

const News = (props) => {

    const [newsResults, setNewsResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const context = useContext(Context);

    console.log(context)

    useEffect(() => {

        apiNewsCall(props.searchTerm).then(res => res.json()).then(parsedJSON => setNewsResults(parsedJSON.articles));
    }, [props.searchTerm]);

    console.log(props.searchTerm);

    console.log(newsResults)

    const Articles = newsResults.map(article => {
        return <NewsArticle 
            author={article.author} 
            title={article.title} 
            description={article.description} 
            url={article.url} 
            imageUrl={article.urlToImage} 
            key={article.title}
        />
    });

    console.log(Articles);


    return (
        <Container>
            {/* <NewsArticle>

            </NewsArticle> */}
            {Articles}
        </Container>
    )
}

export default News;
 