import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import colors from "@/constants/Colors"; 
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

const Header : React.FC = () => {

    const [isHomeView, setIsHomeView] = useState(true);

  const [fontsLoaded] = useFonts({
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const statusBarStyle = isHomeView  ? 'light-content' : 'dark-content';
  const statusBarBackgroundColor = isHomeView ? colors.primary : 'transparent';

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        translucent
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor} 
      />
      
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
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: colors.primary, 
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
