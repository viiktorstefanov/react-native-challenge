import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query {
    articles {
      id
      title
      image_url
      body
      published_at
    }
  }
`;

export const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($id: Int!) {
    articles_by_pk(id: $id) {
      id
      title
      body
    }
  }
`;