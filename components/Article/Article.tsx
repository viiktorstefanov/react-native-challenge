import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { dateFormat } from "@/utils/dateFormat";
import colors from "@/constants/Colors";
import { RelativePathString, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import Entypo from '@expo/vector-icons/Entypo';

type ArticleProps = {
  id: string;
  title: string;
  imageUrl: string;
  body: string;
  publishedAt: string;
  categoryLabel: string;
  categoryTitle: string;
};

const Article: React.FC<ArticleProps> = ({
  id,
  title,
  imageUrl,
  body,
  publishedAt,
  categoryLabel,
  categoryTitle
}) => {
  const router = useRouter();
  
  const handlePress = () => {
    router.push(`/article/${id}` as RelativePathString);
  };

  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.articleItem}>
      <View style={styles.firstCardRow}>
        <View style={styles.firstColumn}>
          <View style={styles.categoryGroup}>
            <Text style={styles.categoryIcon}>{categoryLabel}</Text>
            <Text style={styles.categoryField}>{categoryTitle}</Text>
          </View>
          <Text
            style={styles.articleTitle}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.articleImage} />
      </View>
      <View style={styles.dateGroup}>
        <Text style={styles.date}>{dateFormat(publishedAt)}</Text>
        <Entypo name="dots-three-horizontal" size={18} color="black" />
      </View>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
        {body}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#F6F8FFCC",
    borderRadius: 16,
    width: 327,
    backgroundColor: colors.cardBackground,
    gap: 15,
  },
  firstCardRow: {
    flexDirection: "row",
    gap: 20,
  },
  firstColumn: {
    gap: 9,
  },
  categoryGroup: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  categoryIcon: {
    backgroundColor: "red",
    width: 24,
    height: 24,
    borderRadius: 50,
    borderColor: "#EAECF4",
    borderWidth: 1,
    textAlign: "center",
    verticalAlign: "middle",
    color: "#fff",
    fontSize: 11,
    fontFamily: 'Inter',
  },
  categoryField: {
    marginBottom: 5,
    fontFamily: 'Inter',
    color: '#000000',
    fontSize: 14,
  },
  articleImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  articleTitle: {
    fontSize: 18,
    color: '#000000',
    width: 179,
    fontWeight: "bold",
    fontFamily: 'Inter',
  },
  date: {
    color: colors.date,
    fontFamily: 'Inter',
    width: 179,
  },
  description: {
    color: colors.primary,
    marginBottom: 10,
    fontFamily: 'Inter',
  },
  dateGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  }
});

export default Article;
