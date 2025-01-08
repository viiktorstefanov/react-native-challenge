import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CircleButton from "../CircleButton/CircleButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/Colors";
import RegularButton from "../RegularButton/RegularButton";
import Article from "../Article/Article";
import { Article as ArticleType } from "@/constants/Article";

type ArticlesProps = {
  articles: ArticleType[];
};

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Article
          id={item.id}
          title={item.title}
          imageUrl={item.image_url}
          body={item.body}
          publishedAt={item.published_at}
          slug={item.slug}
        />
      )}
    />
  );
};

export default Articles;

{
  /* <Text>Articles</Text> */
}
{
  /* <CircleButton onHoverColor="red" onPress={() => {}}>
        <Ionicons name="star-outline" size={24} color={colors.primary} />
      </CircleButton>
      <CircleButton onHoverColor="red" onPress={() => {}}>
        <Feather name="share" size={24} color={colors.primary} />
      </CircleButton> */
}

//   <RegularButton text="Save post" onPress={() => {}} />
