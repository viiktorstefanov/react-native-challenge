import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL, API_KEY } from "@env";

// const API_URL = 'https://brave-blowfish-66.hasura.app/v1/graphql';
// const API_KEY = 's2StHw61j1PoAOS55C5DPj20WBg6DLnMiJen5vmN8xwdap6tWS6QIVlS3zriuUtd';

const client = new ApolloClient({
  uri: API_URL,
  headers: {
    'x-hasura-admin-secret': API_KEY,
  },
  cache: new InMemoryCache(),
});

export default client;
