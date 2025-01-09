import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { ApolloProvider, useQuery } from "@apollo/client";
import { GET_ARTICLE_BY_ID } from "@/services/queries";
import client from "@/services/apolloClient";

import { Article } from "@/constants/Article";
import { useFonts } from "expo-font";
import CircleButton from "../CircleButton/CircleButton";
import colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import RegularButton from "../RegularButton/RegularButton";

import { LinearGradient } from "expo-linear-gradient";

const ArticleDetails = () => {
  const { id } = useLocalSearchParams();
  const articleId = parseInt(id as string, 10);

  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id: articleId },
  });

  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (loading) return <Text>Loading articles...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const article: Article = data.articles_by_pk;

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        />
        <Image
          source={{ uri: article.image_url }}
          style={styles.articleImage}
        />
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text style={styles.description}>{article.body}</Text>
      </ScrollView>

      <LinearGradient
        colors={["transparent", "rgba(255, 255, 255, 0.8)"]}
        style={styles.staticBox}
      >
        <CircleButton onHoverColor="red" onPress={() => {}}>
          <Ionicons name="star-outline" size={24} color={colors.primary} />
        </CircleButton>

        <RegularButton
          text="Save post"
          secondaryText={"Saved"}
          onPress={() => {}}
        />

        <CircleButton onHoverColor="red" onPress={() => {}}>
          <Feather name="share" size={24} color={colors.primary} />
        </CircleButton>
      </LinearGradient>
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
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  articleImage: {
    width: width,
    height: 478,
    borderRadius: 0,
    resizeMode: "cover",
  },
  articleTitle: {
    fontSize: 32,
    color: "#000",
    width: 327,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Inter",
    marginTop: 20,
  },
  description: {
    color: "#000",
    width: 327,
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 20,
  },
  staticBox: {
    width: width,
    height: 167,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    gap: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default ApolloApp;
