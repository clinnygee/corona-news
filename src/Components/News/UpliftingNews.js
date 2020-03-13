import React, {useState, useEffect} from 'react';
import NewsArticle from './NewsArticle';
import {apiUpliftingNewsCall} from '../../API';
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 16px 0 16px 0;
`

const UpliftingNews = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        apiUpliftingNewsCall().then(res => res.json()).then(parsedJSON => setArticles(parsedJSON.data.children));
    }, []);

    console.log(articles)

    const Articles = articles.map(article => {
        return (
        <NewsArticle 
            author={article.data.author}
            title={article.data.title}
            description={article.data.selftext}
            imageUrl={article.data.thumbnail}
            url={article.data.url}

        />)
    })

    return (
        
        <Container>
            {Articles}
        </Container>
    )
}

export default UpliftingNews;