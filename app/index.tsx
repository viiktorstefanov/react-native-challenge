import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import client from '@/services/apolloClient'; 
import Header from "@/components/Header/Header"; 
import { GET_ARTICLES } from "@/services/queries";
import Articles from "@/components/Articles/Articles";

const App = () => {

  const { loading, error, data } = useQuery(GET_ARTICLES);
  
  if (loading) return <Text>Loading articles...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Articles articles={data.articles} />
    </View>
  );
};

const ApolloApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default ApolloApp;