import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL, API_KEY } from "@env";

const client = new ApolloClient({
  uri: API_URL,
  headers: {
    'x-hasura-admin-secret': API_KEY,
  },
  cache: new InMemoryCache(),
});

export default client;
