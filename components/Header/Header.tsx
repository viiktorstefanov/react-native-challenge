import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import colors from "@/constants/Colors";
import { useFonts } from 'expo-font';

const Header = () => {

    const [fontsLoaded] = useFonts({
        Inter: require('../../assets/fonts/Inter-Regular.ttf'),
      });

      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Articles</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
      flex: 0, 
    },
    header: {
      width: '100%',
      paddingTop: 30,
      paddingBottom: 20,
      backgroundColor: colors.primary,
      color: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      fontFamily: 'Inter',
      color: '#fff',
    },
  });

export default Header;
