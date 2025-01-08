import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import { useRouter } from "expo-router";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { API_URL, API_KEY } from "@env";

const App = () => {
  const router = useRouter();

  const [isHomeView, SetIsHomeView] = useState(true);

  const client = new ApolloClient({
    uri: API_URL,
    headers: {
      'x-hasura-admin-secret': API_KEY,
    },
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <View style={{ flex: 1 }}>
        <Header isHomeView={isHomeView} />
        <Text onPress={() => router.push("/articles-list")}>fgewffwewre</Text>
      </View>
    </ApolloProvider>
  );
};

export default App;
