import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type ArticleProps = {
  id: string;
  title: string;
  imageUrl: string;
  body: string;
  publishedAt: string;
  slug: string;
};

const Article: React.FC<ArticleProps> = ({
  id,
  title,
  imageUrl,
  body,
  publishedAt,
  slug,
}) => {
  return (
    <View style={styles.articleItem}>
      <Image source={{ uri: imageUrl }} style={styles.articleImage} />
      <Text style={styles.articleTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.readMoreText}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    articleItem: {
      marginBottom: 20,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    articleImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    articleTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    readMoreText: {
      color: 'blue',
      marginTop: 5,
    }
  });

export default Article;
