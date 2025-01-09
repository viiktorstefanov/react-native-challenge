import { StyleSheet, FlatList } from "react-native";
import React from "react";
import colors from "@/constants/Colors";
import Article from "../Article/Article";
import { Article as ArticleType } from "@/constants/Article";

type ArticlesProps = {
  articles: ArticleType[];
};

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <FlatList
      style={styles.container}
      data={articles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Article
          id={item.id}
          title={item.title}
          imageUrl={item.image_url}
          body={item.body}
          publishedAt={item.published_at}
          categoryLabel={item.category.label}
          categoryTitle={item.category.title}
        />
      )}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Articles;