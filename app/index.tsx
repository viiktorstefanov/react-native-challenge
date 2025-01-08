import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Header from "@/components/Header/Header";
import colors from "@/constants/Colors";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
    <StatusBar translucent backgroundColor={colors.primary} barStyle="light-content" />
    <Header />
    <Text>fgewffwewre</Text>
  </View>
  );
};

export default App;
