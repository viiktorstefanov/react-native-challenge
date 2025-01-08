import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Articles from '@/components/Articles/Articles';

const ArticlesTab = () => {
  return (
    <View style={styles.container}>
      <Articles />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})

export default ArticlesTab;