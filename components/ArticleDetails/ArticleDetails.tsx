import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ArticleDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <StatusBar
        translucent
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{id}</Text>
        <Text style={styles.body}>test</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
  },
});

export default ArticleDetails;
