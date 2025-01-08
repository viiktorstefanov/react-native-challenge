import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CircleButton from "../CircleButton/CircleButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/constants/Colors";
import RegularButton from "../RegularButton/RegularButton";

import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from "@/services/queries";

const Articles = () => {

    // const { loading, error, data } = useQuery(GET_ARTICLES);
  
    

  return (
    <View style={styles.container}>
      {/* <Text>Articles</Text> */}
      {/* <CircleButton onHoverColor="red" onPress={() => {}}>
        <Ionicons name="star-outline" size={24} color={colors.primary} />
      </CircleButton>
      <CircleButton onHoverColor="red" onPress={() => {}}>
        <Feather name="share" size={24} color={colors.primary} />
      </CircleButton> */}
      <ScrollView  >

      <RegularButton text="Save post" onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

export default Articles;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // paddingTop: 50,
        // marginTop: 10,
    }
})
