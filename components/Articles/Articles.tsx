import { View, Text } from "react-native";
import React from "react";
import CircleButton from "../CircleButton/CircleButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/Colors";
import RegularButton from "../RegularButton/RegularButton";

const Articles = () => {
  return (
    <View>
      {/* <Text>Articles</Text> */}
      {/* <CircleButton onHoverColor="red" onPress={() => {}}>
        <Ionicons name="star-outline" size={24} color={colors.primary} />
      </CircleButton>
      <CircleButton onHoverColor="red" onPress={() => {}}>
        <Feather name="share" size={24} color={colors.primary} />
      </CircleButton> */}
      <RegularButton text="Save post" onPress={() => {}} />
    </View>
  );
};

export default Articles;
