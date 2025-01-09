import { View, Text, StyleSheet, StatusBar, Image, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { ApolloProvider, useQuery } from "@apollo/client";
import { GET_ARTICLE_BY_ID } from "@/services/queries";
import client from "@/services/apolloClient";

const ArticleDetails = () => {
  const { id } = useLocalSearchParams();

  const articleId = parseInt(id as string, 10);
  
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id: articleId  },
  });
  
  
    if (loading) return <Text>Loading articles...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    const article = data.articles_by_pk;

  return (
    <>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <Image source={{ uri: article.image_url }} style={styles.articleImage} />
      </View>
    </>
  );
};

const ApolloApp = () => {
  return (
    <ApolloProvider client={client}>
      <ArticleDetails />
    </ApolloProvider>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0, 
    justifyContent: 'flex-start', 
  },
  articleImage: {
    width: width,  
    height: 478,   
    borderRadius: 0,  
    resizeMode: 'cover', 
  },
});

export default ApolloApp;
