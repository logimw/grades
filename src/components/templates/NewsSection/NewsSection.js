import React, { useEffect, useState } from "react";
import {
  ArticleWrapper,
  ContentWrapper,
  NewsSectionHeader,
  TitleWrapper,
  Wrapper,
} from "./NewsSection.styles";
import { Button } from "components/atoms/Button/Button";
import axios from "axios";

const URL = "https://graphql.datocms.com/";
const ARTICLES_QUERY = `
            {
              allArticles {
                id
                title
                category
                content
                image {
                  url
                }
              }
            }
          `;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .post(
        URL,
        {
          query: ARTICLES_QUERY,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => {
        setError("Sorry, we couldn't load articles.");
        console.log(err);
      });
  }, []);
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>

      {articles.length > 0 && !error ? (
        articles.map((article) => {
          return (
            <ArticleWrapper key={article.id}>
              <TitleWrapper>
                <h3>{article.title}</h3>
                <p>{article.category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{article.content}</p>
                {article.image ? (
                  <img
                    src={article.image.url}
                    alt={article.title}
                    title={article.title}
                  />
                ) : null}
              </ContentWrapper>
              <Button isBig>Read more</Button>
            </ArticleWrapper>
          );
        })
      ) : (
        <NewsSectionHeader>{error ? error : "Loading..."}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
