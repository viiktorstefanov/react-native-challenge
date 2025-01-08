import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import { useRouter } from "expo-router";

const App = () => {
    const router = useRouter();

    const [isHomeView, SetIsHomeView] = useState(true);

  return (
    <View style={{ flex: 1 }}>
    <Header isHomeView={isHomeView} />
    <Text onPress={() => router.push("/articles-list")}>fgewffwewre</Text>
  </View>
  );
};

export default App;
